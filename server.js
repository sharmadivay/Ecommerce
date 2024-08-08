import express from "express";
import dotenv from "dotenv";
import connect from "./db/connectdb.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

// Mongodb Connect
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

// Resolve __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "dist")));
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connect();
  console.log(`Server listening on port ${PORT}`);
});
