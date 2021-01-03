import mongoose,{ model, Schema } from "mongoose";

export interface Note extends mongoose.Document {
  descripcion: String,
  ultimaModificacion: Date
}

const NoteSchema = new Schema({
  descripcion: String,
  ultimaModificacion: Date
});

export default model<Note>("Note", NoteSchema);
