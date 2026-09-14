const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"] || req.headers["x-access-token"];
  const token = authHeader ? authHeader.replace("Bearer ", "") : null;
  const decoded = token ? jwt.decode(token) : null;

if (!token) {
  return res.status(401).json({ message: "Token requerido" });
}

  return res.status(403).json({ message: "Token invalido" });
}

module.exports = authMiddleware;
