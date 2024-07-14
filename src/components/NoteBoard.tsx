import React, { useState } from "react";
import { Note } from './Note';
import { AddNoteContainer } from "./AddNote";
import { noteParam, updateNotesFunc, editFunc, noteFunc, addFunc } from "../types/types";

import './NoteBoard.css';



export const NoteBoard = ({
    userNotesList,
    updateUserNotesList,
    showList,
    changePinState,
    copyNote,
    eraseNote,
    addNote,
    editNote
}:{
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc,
    showList:noteParam[],
    changePinState: noteFunc,
    copyNote: noteFunc,
    eraseNote: noteFunc,
    addNote: addFunc,
    editNote: editFunc
}) => {

    return (
        <>
        <AddNoteContainer
        userNotesList={userNotesList}
        updateUserNotesList={updateUserNotesList}
        addNote={addNote}
        />
        <div className="noteBoard">
            <Note
            userNotesList={userNotesList}
            updateUserNotesList={updateUserNotesList}
            showList={showList}
            editNote={editNote}
            changePinState={changePinState}
            copyNote={copyNote}
            eraseNote={eraseNote}
            />
        </div>
        </>
    );
};

