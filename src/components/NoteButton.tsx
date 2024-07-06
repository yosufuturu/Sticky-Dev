import { noteParam } from './../types'
import { changePinState, saveNotesList, copyNote, eraseNote } from '../function/noteControl'
import pinImg from './assets/pin.svg'
import copyImg from './assets/copy.svg'
import dustImg from './assets/dustbox.svg'
import './NoteButton.css'

export const PinBtn = ({index, userNotesList, setUserNotesList}:
    {
        index: number
        userNotesList: Array<noteParam>,
        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
    }) => {

    return(
        <button className={`noteBtn pinBtn pinState-${userNotesList[index].pinState}`} 
        onClick={()=>{changePinState(index, userNotesList, setUserNotesList)}}>
            <img src={pinImg} className='pinIcon ButtonIcon' />
        </button>
    );
};

export const CopyBtn = ({index, userNotesList, setUserNotesList}:
    {
        index: number
        userNotesList: Array<noteParam>,
        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
    }) => { 

    return(
        <button className={`noteBtn copyBtn`}
        onClick={()=>{copyNote(index, userNotesList, setUserNotesList)}}>
            <img src={copyImg} className='copyIcon ButtonIcon' />
        </button>
    );
};

export const DustBtn = ({index, userNotesList, setUserNotesList}:
    {
        index: number
        userNotesList: Array<noteParam>,
        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
    }) => {

    return(
        <button className={`noteBtn dustBtn`} 
        onClick={()=>{eraseNote(index, userNotesList, setUserNotesList)}} >
            <img src={dustImg} className='dustIcon ButtonIcon' />
        </button>
    );
};