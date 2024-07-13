import React from "react";
import { noteParam, updateNotesFunc, noteFunc } from './../types/types'
// import { changePinState, copyNote, eraseNote } from '../function/noteControl'
import pinImg from './assets/pin.svg'
import copyImg from './assets/copy.svg'
import dustImg from './assets/dustbox.svg'
import './NoteButton.css'

export const PinBtn = ({
    id,
    userNotesList,
    updateUserNotesList,
    showList,
    changePinState
}:{
    id: number
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc,
    showList: noteParam[],
    changePinState: noteFunc
    }) => {
        
        const noteValue: noteParam|undefined = showList.find((e)=>e.id===id);
        if (undefined===noteValue) return
    return(
        <button className={`noteBtn pinBtn pinState-${noteValue.pinState}`} 
        onClick={()=>{changePinState(id, userNotesList, updateUserNotesList)}}
        >
            <img src={pinImg} className='pinIcon ButtonIcon' />
        </button>
    );
};

export const CopyBtn = ({
    id,
    userNotesList,
    updateUserNotesList,
    copyNote
}:{
    id: number
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc,
    copyNote: noteFunc
}) => {

    return(
        <button className={`noteBtn copyBtn`}
        onClick={()=>{copyNote(id, userNotesList, updateUserNotesList)}}>
            <img src={copyImg} className='copyIcon ButtonIcon' />
        </button>
    );
};

export const DustBtn = ({
    id,
    userNotesList,
    updateUserNotesList,
    eraseNote
}:{
    id: number
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc,
    eraseNote: noteFunc
}) => {

    return(
        <button className={`noteBtn dustBtn`} 
        onClick={()=>{eraseNote(id, userNotesList, updateUserNotesList)}} >
            <img src={dustImg} className='dustIcon ButtonIcon' />
        </button>
    );
};