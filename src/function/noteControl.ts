
import { noteParam } from "../types";

export function editNote(text:string,
                        index:number,
                        userNotesList: Array<noteParam>,
                        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
){
    const nextUserNotesList: Array<noteParam> = userNotesList.slice();
    nextUserNotesList[index].text = text;
    setUserNotesList(nextUserNotesList);

    // save list data
    saveNotesList(JSON.stringify(nextUserNotesList));
}

export function copyNote(index: number,
                        userNotesList: Array<noteParam>,
                        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
){
    addNote(userNotesList[index].text, userNotesList, setUserNotesList);
}

export function changePinState (index: number,
                                userNotesList: Array<noteParam>,
                                setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
){
    const nextUserNotesList: Array<noteParam> = userNotesList.slice();
    nextUserNotesList[index].pinState = !nextUserNotesList[index].pinState;
    setUserNotesList(nextUserNotesList);

    // save list data
    saveNotesList(JSON.stringify(nextUserNotesList));
}

export function addNote(value: string,
                        userNotesList: Array<noteParam>,
                        setUserNotesList: React.Dispatch<React.SetStateAction<Array<noteParam>>>
){
        // create new note 
        const newNote :noteParam = {
            id: userNotesList.length,
            text: value,
            pinState: false,
            date: new Date()
        };

        const nextUserNotesList: Array<noteParam> = [...userNotesList, newNote];
        setUserNotesList(nextUserNotesList);

        // save list data
        saveNotesList(JSON.stringify(nextUserNotesList));

    }
    
export function saveNotesList(saveData: string) {
        
        // save list data to local storage
        localStorage.setItem('key', saveData);
}

export function getNotesList() {
    
    // Get data from local storage
    const jsonData = localStorage.getItem('key');
    
    // Get the retrieved data or a template if the data is null
    if (null === jsonData || 'undefined' === jsonData) {
        localStorage.setItem('key', JSON.stringify(initData))
        return initData
    }else{
        
        return  JSON.parse(jsonData) as  Array<noteParam>;
    }
};

// Initial Template
const initData: Array<noteParam> = [
    {
        id: 0,
        text: "Welcome to StickyNotes",
        pinState: true,
        date: new Date()
    },
    {
        id: 1,
        text: "The three buttons below allow pinning, copying, and deleting, respectively.",
        pinState: false,
        date: new Date()
    },
    {
        id: 2,
        text: "Shige-san is a genius",
        pinState: false,
        date: new Date()
    },
];