import { noteParam } from './../types'
import { changePinState, saveNotesList } from '../function/noteControl'
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

export const CopyBtn = () => {
    

    return(
        <button className={`noteBtn copyBtn`}>
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
    
        const eraseNote = (i: number) => {
            const nextUserNotesList: Array<noteParam> = userNotesList.slice();
            nextUserNotesList.splice(i, 1);
            saveNotesList(JSON.stringify(nextUserNotesList));
            setUserNotesList(nextUserNotesList);
        }

    return(
        <button className={`noteBtn dustBtn`} 
        onClick={()=>{eraseNote(index)}} >
            <img src={dustImg} className='dustIcon ButtonIcon' />
        </button>
    );
};