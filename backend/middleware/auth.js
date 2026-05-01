export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: "No token" });

  req.user = { id: token }; // simple version
  next();
};