import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import metaRoutes from "./src/routes/meta.route.js"
import pool from './db.connection.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());


app.get("/test", async (req, res) => {
  
  try {
  
    res.send("Test Route");
  } catch (error) {
        throw new Error(error)
  }
});

// Routes

app.use("/api", metaRoutes)



const start = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL Connection Pool is established successfully.");
    connection.release(); // Release the connection back to the pool
    app.listen(process.env.PORT || 3000, () =>
      console.log(`HTTP server is running on port ${process.env.PORT || 3000}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();