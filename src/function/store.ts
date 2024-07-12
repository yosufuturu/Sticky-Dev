import { noteParam } from "../types/types";

// Initial Template
export const initData: noteParam[] = [
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

/******************************************************************************
 * function: saveNotesList
 * argument: saveData: string
 ******************************************************************************/
export function saveNotesList(saveData: string) {
        
    // save list data to local storage
    localStorage.setItem('key', saveData);
} /*** end of saveNotesList function *****************************************/



/******************************************************************************
* function: getNotesList
* argument: none
******************************************************************************/
export function getNotesList() {

// Get data from local storage
const jsonData = localStorage.getItem('key');

// Get the retrieved data or a template if the data is null
if (null === jsonData || 'undefined' === jsonData) {
    localStorage.setItem('key', JSON.stringify(initData))
    return initData
}else{
    
    return  JSON.parse(jsonData) as  noteParam[];
}
} /*** end of getNotesList function ******************************************/

