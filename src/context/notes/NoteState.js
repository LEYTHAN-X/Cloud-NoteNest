import NoteContext from './noteContext';
import React, { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [{
        "_id": "6828210qf299f40e085sbdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828df210f299f40e08q5bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "682q8210f2s99f40e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828210f299qf4rw0e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6q828210f299f40egv085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828210fsd299f40e085bdqd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    }]
    const [notes, setNotes] = useState(notesInitial);

    // Add a note
    const addNote=(title,description,tag)=>{
        console.log("Adding a new note");
        const note={
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
    const deleteNote=()=>{

    }
    
    // Edit a note
    const editNote=()=>{

    }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
