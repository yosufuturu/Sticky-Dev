import React, { useState } from 'react';
import { noteParam, updateNotesFunc, addFunc } from './../types/types';
import './addNote.css'

export const AddNoteContainer = ({
    userNotesList,
    updateUserNotesList,
    addNote
}:{
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc,
    addNote: addFunc
}) => {

    const [inputText, setInputText] = useState<string>("");

    return (<>

        <div className="addNoteContainer">
          <input type='text' className="addInputText" value={inputText}
          onChange={(e)=>{setInputText(e.target.value)}}
          placeholder="What would you add?" />

          <button className="addNoteBtn"
          onClick={()=>{
            // If there is no input, nothing is done.
            if ('' === inputText) return;
            addNote(inputText, userNotesList, updateUserNotesList);
            setInputText('');
        }}
          >+</button>
        </div>

    </>);
    
}
