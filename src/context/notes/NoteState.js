import NoteContext from './noteContext';
import React, { useState } from 'react';

const NoteState = (props) => {
    const s1 = {
        name: "Ashish Kumar",
        class: "5th"
    }
    const [state, setstate] = useState(s1);
    const update=()=>{
        setTimeout(() => {
            setstate({
                name: "Ashish Kumar",
                class: "6th"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
