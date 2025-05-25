import React, { useContext, useEffect, useRef,useState } from 'react';
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes,editNote } = context;
    useEffect(() => {
        getNotes();
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null);
    const[note, setNote] = useState({id: "",etitle:"", edescription:"", etag:"default"})
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    }
    const handleClick=(e)=>{
        editNote(note.id,note.etitle,note.edescription,note.etag);
        refClose.current.click();
        props.showAlert("Updated Successfully","success");
    }
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control"  id="etag" value={note.etag} name="etag" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Notes</h1>
                {notes.length === 0 && "No notes to display"}
                <div className="row">
                    {notes.map((note) => {
                        return (

                            <div className="col-md-4 my-2" key={note._id}>
                                <Noteitem updateNote={updateNote} note={note} showAlert={props.showAlert}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Notes;
