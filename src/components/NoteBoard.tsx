import {useState} from "react";
import { Note } from './Note';
import { noteParam } from "../types";
import { getNotesList } from './../function/noteControl';
import './NoteBoard.css';

export const NoteBoard = () => {

    // Get memo data
    const notesList: Array<noteParam> = getNotesList();

    const [userNotesList,setUserNotesList] = useState<Array<noteParam>>(notesList);
    return (
        <>
        <div className="noteBoard">
        <Note userNotesList={userNotesList} setUserNotesList={setUserNotesList} />


        </div>
        </>
    );
};

