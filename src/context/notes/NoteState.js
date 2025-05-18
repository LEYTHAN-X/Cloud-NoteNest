import NoteContext from './noteContext';
import React, { useState } from 'react';

const NoteState = (props) => {
    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
