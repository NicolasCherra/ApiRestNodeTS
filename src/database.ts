import mongoose, { Mongoose } from "mongoose";

const mongodbURI = "";

mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db: Mongoose) => console.log("DB is connected"))
  .catch((err: Error) => console.error(err));
