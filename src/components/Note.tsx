import {PinBtn, CopyBtn, DustBtn} from './NoteButton'
import { editNote } from '../function/noteControl';
import { noteParam } from "../types";
import './note.css';


export const Note = ({userNotesList, setUserNotesList}:
    {userNotesList: Array<noteParam>,
        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
    }) => {
    

    const notes = userNotesList.map(((e,i)=>{
        return(
        <div key={e.id} className={`note pin-${e.pinState}`}>
            <textarea className='noteArea' defaultValue={e.text}
            onChange={(event)=>{editNote(event.target.value,i,userNotesList,setUserNotesList)}}
            ></textarea>
            <div className='noteButtonContainer'>
                <PinBtn index={i} userNotesList={userNotesList} setUserNotesList={setUserNotesList} />
                <CopyBtn index={i} userNotesList={userNotesList} setUserNotesList={setUserNotesList} />
                <DustBtn index={i} userNotesList={userNotesList} setUserNotesList={setUserNotesList} />
            </div>
        </div>
        );
    }));
    return <>{notes}</>
    
};