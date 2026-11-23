const mongoose = require("mongoose");

const downloadSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, index: true },
  address: { type: String, required: true },
  slug: { type: String, required: true, index: true },
  slugFieldName: { type: String, default: null },
  startRow: { type: Number, required: true },
  endRow: { type: Number, required: true },
  downloadedAt: { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model("Download", downloadSchema);
