//middleware for api security
export const checkApiKey=(req, res, next)=> {
  const apiKey = req.headers["x-api-key"]; // or use req.query.api_key
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: "Invalid or missing API key" });
  }

  next();
}