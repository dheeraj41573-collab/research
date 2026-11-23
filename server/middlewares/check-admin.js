const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "Auth Failed" });
    }

    const token = authHeader.split(" ")[1];

    JWT.verify(token, process.env.TOKEN_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).json({ success: false, message: "Auth Failed" });
      }

      if (decode.role !== "admin") {
        return res.status(403).json({
          success: false,
          message: "Admin access required",
        });
      }

      req.body.userId = decode.userId;
      req.body.role = decode.role;
      next();
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Auth Failed",
    });
  }
};
