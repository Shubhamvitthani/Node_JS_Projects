require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
