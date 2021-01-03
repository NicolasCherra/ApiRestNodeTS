import express from "express";
import RoutesNotes from "./routes/RoutesNotes";
import  "./database";

//Init
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(RoutesNotes);

//Start Server
app.listen(app.get("port"), () => {
  console.log(`Server on port`, app.get("port"));
});
