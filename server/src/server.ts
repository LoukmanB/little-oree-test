// Libraries import
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Routes import
import loginRoute from "./routes/login.js";
import getProducts from "./routes/getProducts.js";

// Server configuration
const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

// Server routes
app.use(loginRoute);
app.use(getProducts);

// Default route
app.all("*", async (req, res) => {
  res.status(500).send("Route not found");
});

// Start server
export const server = app.listen(port, () => {
  console.log("Server running on port " + port);
});

export default app;
