import express from "express";
import dotenv from "dotenv";
import connect from "./db/connectdb.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
//Mongodb Connect
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to app</h1>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connect();
  console.log(`Server listening in port ${PORT}`);
});
