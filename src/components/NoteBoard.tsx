import React, { useState } from "react";
import { Note } from './Note';
import { AddNoteContainer } from "./AddNote";
import { noteParam, updateNotesFunc, editFunc, noteFunc, addFunc } from "../types";
import { getNotesList } from './../function/noteControl';
import './NoteBoard.css';



export const NoteBoard = ({
    userNotesList,
    updateUserNotesList,
    showList,
    // updateShowList,
    // searchWord,
    changePinState,
    copyNote,
    eraseNote,
    addNote,
    editNote
}:{
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc,
    showList:noteParam[],
    // updateShowList: updateNotesFunc,
    // searchWord: string,
    changePinState: noteFunc,
    copyNote: noteFunc,
    eraseNote: noteFunc,
    addNote: addFunc,
    editNote: editFunc
}) => {

    // Get memo data
    // const notesList: Array<noteParam> = getNotesList();

    // const [userNotesList,setUserNotesList] = useState<Array<noteParam>>(notesList);

        //console.log(searchWord);

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

