import React from "react";
import { noteParam, updateNotesFunc, editFunc, noteFunc } from "../types/types";
import { PinBtn, CopyBtn, DustBtn } from './NoteButton'
import './note.css';


export const Note = ({
    userNotesList,
    updateUserNotesList,
    showList,
    editNote,
    changePinState,
    copyNote,
    eraseNote
}:{
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc,
    showList: noteParam[],
    editNote: editFunc
    changePinState: noteFunc,
    copyNote: noteFunc,
    eraseNote: noteFunc
}) => {
    

    const notes = showList.map(((e)=>{
        return(
        <div key={e.id} className={`note pin-${e.pinState}`}>
            <textarea className='noteArea' defaultValue={e.text}
            onChange={(event)=>{
                editNote(
                    event.target.value,
                    e.id,
                    userNotesList,
                    updateUserNotesList
                )}}
            ></textarea>
            <div className='noteButtonContainer'>
                <PinBtn id={e.id}
                userNotesList={userNotesList}
                updateUserNotesList={updateUserNotesList}
                showList={showList}
                changePinState={changePinState}
                />
                <CopyBtn
                id={e.id}
                userNotesList={userNotesList}
                updateUserNotesList={updateUserNotesList}
                copyNote={copyNote}
                />

                <DustBtn 
                id={e.id}
                userNotesList={userNotesList}
                updateUserNotesList={updateUserNotesList}
                eraseNote={eraseNote}
                />
            </div>
        </div>
        );
    }));
    return <>{notes}</>
    
};