
import { noteParam } from "../types";

export function addNote(){
    
}

export const saveNotesList = (saveData: string) => {

    // const saveData = JSON.stringify(userNotesList)
    console.log(saveData)
    localStorage.setItem('key', saveData);
}

export const getNotesList = () => {
    
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
        id: 1,
        text: "Wellcome to StickyNotes",
        pinState: true,
        date: new Date()
    },
    {
        id: 2,
        text: "The three buttons below allow pinning, copying, and deleting, respectively.",
        pinState: false,
        date: new Date()
    },
    {
        id: 3,
        text: "Shige-san is a genius",
        pinState: false,
        date: new Date()
    },
];