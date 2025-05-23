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
        const note = await response.json();
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
        const json = await response.json();
        console.log(json);
        //Logic to delete in client
        const newNotes = notes.filter((note) => { return note._id != id })
        setNotes(newNotes);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        //TODO: API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyODFmMjMyOTlmNDBlMDg1YmRkN2I3In0sImlhdCI6MTc0NzQ1OTk5NX0.xvyO6qBQjYw-ImywYTprCiDBdkhgkwD5vmDHcetNDvo"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json =await response.json();
        console.log(json);

        //Logic to edit in client
        const newNotes = JSON.parse(JSON.stringify(notes)); // Deep copy
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
