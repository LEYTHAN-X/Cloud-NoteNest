import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes } = context;

    return (
        <div className="container my-3">
            <h1>Your Notes</h1>
            <div className="row">
                {notes.map((note) => {
                    return (
                        <div className="col-md-4 my-2" key={note._id}>
                            <Noteitem note={note} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Notes;
