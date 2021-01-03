import { Request, Response } from 'express';

import NoteModel, { Note } from '../models/Note';

class ControllerNotes {

    public async index(req: Request, res: Response) {
        const Notes = await NoteModel.find({});
        res.render('Notes/index', { 
            title: 'Notes',
            Notes
        });
    }

    public renderFormNote(req: Request, res: Response) {
        res.render('Notes/add', {
            title: 'Add A Note'
        });
    }

    public async saveNote(req: Request, res: Response) {
        const { title, author, isbn } = req.body;
        const newNote: Note = new NoteModel({
            title,
            author,
            isbn
        });
        await newNote.save();
        res.redirect('/Notes');
    }

}

export const controllerNotes = new ControllerNotes();