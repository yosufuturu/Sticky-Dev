import React, { useState } from 'react';
import { noteParam } from './../types';
import { addNote } from '../function/noteControl';
import './addNote.css'

export const AddNoteContainer = ({userNotesList, setUserNotesList}:
    {
        userNotesList: Array<noteParam>,
        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
    }) => {

    const [inputText, setInputText] = useState<string>("");

    return (<>

        <div className="addNoteContainer">
          <input className="addInputText" value={inputText}
          onChange={(e)=>{setInputText(e.target.value)}}
          placeholder="What would you add?" />

          <button className="addNoteBtn"
          onClick={()=>{
            // If there is no input, nothing is done.
            if ('' === inputText) return;
            addNote(inputText, userNotesList, setUserNotesList);
        }}
          >+</button>
        </div>

    </>);
    
}
