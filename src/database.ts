import mongoose, { Mongoose } from "mongoose";

const mongodbURI =
  "mongodb+srv://nicolas17197:psoADJlCt0KTCdYm@cluster0.xyuut.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db: Mongoose) => console.log("DB is connected"))
  .catch((err: Error) => console.error(err));
