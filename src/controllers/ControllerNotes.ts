import { Request, Response } from "express";

import NoteModel, { Note } from "../models/Note";

class ControllerNotes {

  public async saveNote(req: Request, res: Response) {
    console.log(req.body);
    const { descripcion} = req.body;
    const ultimaModificacion = new Date();
    const newNote: Note = new NoteModel({
        descripcion,
        ultimaModificacion,
    });
    await newNote
      .save()
      .then(() => res.status(201).send("Nota Creada"))
      .catch(() => res.status(403).send("Surgio un problema en la BD"));
  }
}

export const controllerNotes = new ControllerNotes();
