import express, { Application } from "express";

 import { userRoutes } from "./routes/index";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 
// Routes
app.use("/api/v1", userRoutes);

// Start Server
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
