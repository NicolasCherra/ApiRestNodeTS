import express from "express";
import IndexRoutes from "./routes";
import  "./database";

//Init
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(IndexRoutes);

//Start Server
app.listen(app.get("port"), () => {
  console.log(`Server on port`, app.get("port"));
});
