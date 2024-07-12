import { useState, useEffect } from "react";
import { editFunc, noteParam, updateNotesFunc } from "../types";

export function noteControl () {
    
    // noteControl state
    const [userNotesList, setUserNotesList] = useState<noteParam[]>([]);
    const [showList, setShowList] = useState<noteParam[]>([]);
    const [searchWord, setSearchWord] = useState<string>('');
    
    const updateUserNotesList: updateNotesFunc = (notesList: noteParam[]) => {
        setUserNotesList(notesList)
    }

    // update to show notes list
    const updateShowList: updateNotesFunc = (newShowList: noteParam[]) => {
        setShowList(newShowList);
    }

    const updateSearchWord = (word: string) => {
        setSearchWord(word);
    }

    useEffect(()=>{
        updateUserNotesList(initData);
    },[]);
    
    useEffect(()=>{
        updateShowList(userNotesList);
    },[userNotesList]);
    
    // useEffect(()=>{
    //     console.log('test1');
    //     console.log(userNotesList);
    // },[userNotesList]);
    
    // useEffect(()=>{
    //     console.log('test2');
    //     console.log(showList);
    // },[showList]);


/******************************************************************************
 * function: editNote
 * argument: text:string,
             index:number,
             userNotesList: noteParam[],
             updateUserNotesList: updateNotesFunc
 ******************************************************************************/
    const editNote: editFunc = (
        text:string,
        index:number,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ) =>{
        const nextUserNotesList: noteParam[] = userNotesList.slice();
        nextUserNotesList[index].text = text;
        updateUserNotesList(nextUserNotesList);

        // save list data
        saveNotesList(JSON.stringify(nextUserNotesList));
    }
/******************************************************************************
 * end of editNote function
 ******************************************************************************/



    function copyNote(
        id: number,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ){
        const noteValue: noteParam | undefined = userNotesList.find((e)=>e.id===id);
        if (undefined === noteValue) return;
        addNote(noteValue.text, userNotesList, updateUserNotesList);
    }
/*** end of copyNote function ************************************************/

    function changePinState (
        id: number,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ){
        const index: number = userNotesList.findIndex((e)=>e.id===id);
        const nextUserNotesList: noteParam[] = userNotesList.slice();
        nextUserNotesList[index].pinState = !nextUserNotesList[index].pinState;
        updateUserNotesList(nextUserNotesList);

        // save list data
        saveNotesList(JSON.stringify(nextUserNotesList));
    }  /*** end of changePinState function ***********************************/

    function eraseNote(
        id: number,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ){
        // const index: number = userNotesList.findIndex((e)=>e.id===id);
        const nextUserNotesList: noteParam[] = userNotesList.filter((e)=>e.id!==id);
        // update notes list Hooks
        updateUserNotesList(nextUserNotesList);

        // save list data
        saveNotesList(JSON.stringify(nextUserNotesList));

    }  /*** end of eraseNote function ****************************************/



    function addNote(
        value: string,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ){
        // create new note 
        const newNote :noteParam = {
            id: userNotesList.length,
            text: value,
            pinState: false,
            date: new Date()
        };

        const nextUserNotesList: noteParam[] = [...userNotesList, newNote];
        updateUserNotesList(nextUserNotesList);

        // save list data
        saveNotesList(JSON.stringify(nextUserNotesList));

    }  /*** end of addNote function ******************************************/



    return {
        userNotesList, updateUserNotesList,
        showList, updateShowList,
        searchWord, updateSearchWord,
        changePinState, copyNote, eraseNote, addNote, editNote
    }
}
/******************************************************************************
 * end of noteControl function
 ******************************************************************************/


    



    
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
        
        return  JSON.parse(jsonData) as  noteParam[];
    }
};

// Initial Template
const initData: noteParam[] = [
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