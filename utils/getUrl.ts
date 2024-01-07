const serverUrl =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://zen-codes.vercel.app/";

export default serverUrl