import { noteParam } from "../types/types";

// Initial Template
export const initData: noteParam[] = [
    {
        id: getNumber(),
        text: "Welcome to StickyNotes",
        pinState: true,
        date: new Date()
    },
    {
        id: getNumber(),
        text: "The three buttons below allow pinning, copying, and deleting, respectively.",
        pinState: false,
        date: new Date()
    },
    {
        id: getNumber(),
        text: "Shige-san is a genius",
        pinState: false,
        date: new Date()
    },
];

/******************************************************************************
 * Function: saveNotesList
 * Argument: saveData: string
 * Return  : None
 ******************************************************************************/
export function saveNotesList(saveData: string) {
        
    // save list data to local storage
    localStorage.setItem('key', saveData);
} /*** end of saveNotesList Function *****************************************/



/******************************************************************************
* Function    : getNotesList
* Argument    : None
* Return value: Notes data list
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
} /*** end of getNotesList Function ******************************************/


/******************************************************************************
* Function    : getNumber
* Argument    : None
* Return value: new note id
******************************************************************************/
export function getNumber() {
    const jsonData: string | null = localStorage.getItem('id');

    if (null === jsonData) {
        localStorage.setItem('id', JSON.stringify({id:0}));
        return 0;
    }

    const ret: number = JSON.parse(jsonData).id+1;
    localStorage.setItem('id', JSON.stringify({id: ret}));

    return ret
    
}
/** end of file */
