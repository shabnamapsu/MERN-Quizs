import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DBconnection } from "./db.js";
import { router } from "./router/Route.js";
import path from 'path'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const _dirname= path.resolve();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
DBconnection();

// Test route
app.get("/api", (req, res) => {
  res.send({
    status: 200,
    message: "Message received successfully",
  });
});

// API Routes
app.use("/api/users", router);
 
app.use(express.static(path.join(_dirname ,'/MERN/dist')))
app.get(/.*/,(req,res)=>{
  res.sendFile(path.resolve(_dirname,"MERN" ,"dist","index.html"));
})
// Server start
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
