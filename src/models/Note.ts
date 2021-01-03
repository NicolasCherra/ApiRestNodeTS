import mongoose,{ model, Schema } from "mongoose";

export interface Note extends mongoose.Document {
  title: string;
  author: string;
  isbn: string;
}

const NoteSchema = new Schema({
  title: String,
  author: String,
  isbn: String,
});

export default model<Note>("Note", NoteSchema);
