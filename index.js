import express from "express";
import cors from "cors"; 
import customersRoutes from "./routes/customersRoutes.js";

import adRoutes from './routes/adRoutes.js';


const app = express();

app.use( cors({
    origin: "http://localhost:8080",
    methods: ['GET,POST,PUT,DELETE'],
    allowedHeaders: ['Content-Type,Authorization'],
    credentials: true
  }));

app.options('*',cors());

app.use(express.json());

app.use("/customers", customersRoutes);
// app.use("/admin", adminRoutes );
app.use("/api", adRoutes);


// Define routes for admins
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(" http://localhost:3000");
});
