import NoteContext from './noteContext';
import React, { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [{
        "_id": "6828210f299f40e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828210f299f40e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828210f299f40e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828210f299f40e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828210f299f40e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    },{
        "_id": "6828210f299f40e085bdd7cb",
        "user": "68281f23299f40e085bdd7b7",
        "title": "i am king of this world",
        "description": "on your command king",
        "tag": "objection",
        "date": "2025-05-17T05:39:27.872Z",
        "__v": 0
    }]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
