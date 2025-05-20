import NoteContext from './noteContext';
import React, { useState } from 'react';

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Get All Notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyODFmMjMyOTlmNDBlMDg1YmRkN2I3In0sImlhdCI6MTc0NzQ1OTk5NX0.xvyO6qBQjYw-ImywYTprCiDBdkhgkwD5vmDHcetNDvo"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }
    // Add a note
    const addNote = async (title, description, tag) => {
        //TODO: API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyODFmMjMyOTlmNDBlMDg1YmRkN2I3In0sImlhdCI6MTc0NzQ1OTk5NX0.xvyO6qBQjYw-ImywYTprCiDBdkhgkwD5vmDHcetNDvo"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        
        //Logic to add in client
        console.log("Adding a new note");
        const note = {
            "_id": "6828210fsd299f40e085bdqd7cb",
            "user": "68281f23299f40e085bdd7b7",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-05-17T05:39:27.872Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }
    // Delete a note
    const deleteNote = async (id) => {
        //TODO: API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyODFmMjMyOTlmNDBlMDg1YmRkN2I3In0sImlhdCI6MTc0NzQ1OTk5NX0.xvyO6qBQjYw-ImywYTprCiDBdkhgkwD5vmDHcetNDvo"
            },
        });
        const json = response.json();
        console.log(json);
        //Logic to delete in client
        console.log("Deleting the note with id :" + id);
        const newNotes = notes.filter((note) => { return note._id != id })
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        //TODO: API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyODFmMjMyOTlmNDBlMDg1YmRkN2I3In0sImlhdCI6MTc0NzQ1OTk5NX0.xvyO6qBQjYw-ImywYTprCiDBdkhgkwD5vmDHcetNDvo"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        //Logic to edit in client
        for (let index = 0; index < note.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
