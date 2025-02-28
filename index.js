import express from "express";
import cors from "cors"; 
import customersRoutes from "./routes/customersRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/customers", customersRoutes);
app.use("/admin", adminRoutes );

app.use(
  cors({
    origin: "http://localhost:8080/",
  })
)
app.use(express.json())


// Define routes for admins
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
