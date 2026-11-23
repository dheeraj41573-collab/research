const Download = require("../models/DownloadModel.js");
const mongoose = require("mongoose");

function extractSlug(body) {
  if (!body) return { slug: null, slugFieldName: null };
  if (typeof body.slug === "string" && body.slug.length > 0) {
    return { slug: body.slug, slugFieldName: "slug" };
  }
  const slugKeys = Object.keys(body).filter(
    (k) =>
      k.toLowerCase().endsWith("slug") &&
      typeof body[k] === "string" &&
      body[k].length > 0
  );
  if (slugKeys.length > 0) {
    const key = slugKeys[0];
    return { slug: body[key], slugFieldName: key };
  }
  return { slug: null, slugFieldName: null };
}

const saveDownload = async (req, res) => {
  try {
    const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
    const email = typeof req.body?.email === "string" ? req.body.email.trim() : "";
    const address = typeof req.body?.address === "string" ? req.body.address.trim() : "";
    const startRow = Number(req.body?.startRow);
    const endRow = Number(req.body?.endRow);

    if (!name) return res.status(400).json({ error: "name is required" });
    if (!email) return res.status(400).json({ error: "email is required" });
    if (!address) return res.status(400).json({ error: "address is required" });
    if (!Number.isFinite(startRow) || startRow < 1) {
      return res.status(400).json({ error: "startRow invalid" });
    }
    if (!Number.isFinite(endRow) || endRow < startRow) {
      return res.status(400).json({ error: "endRow invalid" });
    }

    const { slug, slugFieldName } = extractSlug(req.body || {});
    if (!slug) return res.status(400).json({ error: "slug is required" });

    const download = new Download({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      address,
      slug,
      slugFieldName,
      startRow,
      endRow,
    });
    const saved = await download.save();
    return res.status(201).json({
      message: "Download record saved successfully",
      _id: saved._id,
      name: saved.name,
      email: saved.email,
      slug: saved.slug,
      startRow: saved.startRow,
      endRow: saved.endRow,
      downloadedAt: saved.downloadedAt,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message, name: err.name });
  }
};

const getAllDownloads = async (req, res) => {
  try {
    const downloads = await Download.find().sort({ downloadedAt: -1 });
    return res.status(200).json(downloads);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const DAY_MS = 24 * 60 * 60 * 1000;

function startOfUtcDay(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function formatUtcDay(date) {
  return date.toISOString().slice(0, 10);
}

const getDownloadSummary = async (req, res) => {
  try {
    const requestedDays = Number(req.query?.days);
    const days = Math.min(Math.max(Number.isFinite(requestedDays) ? requestedDays : 14, 1), 90);
    const today = startOfUtcDay(new Date());
    const startDate = new Date(today.getTime() - (days - 1) * DAY_MS);

    const [groupedCounts, totalDownloads] = await Promise.all([
      Download.aggregate([
        {
          $match: {
            downloadedAt: { $gte: startDate }
          }
        },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$downloadedAt"
              }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { _id: 1 } }
      ]),
      Download.countDocuments()
    ]);

    const countsByDay = new Map(groupedCounts.map((item) => [item._id, item.count]));
    const dailyCounts = Array.from({ length: days }, (_, index) => {
      const currentDate = new Date(startDate.getTime() + index * DAY_MS);
      const key = formatUtcDay(currentDate);
      return {
        date: key,
        count: countsByDay.get(key) || 0
      };
    });

    return res.status(200).json({
      totalDownloads,
      todayDownloads: dailyCounts[dailyCounts.length - 1]?.count || 0,
      dailyCounts
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { saveDownload, getAllDownloads, getDownloadSummary };
