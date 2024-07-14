import { useState, useEffect } from "react";
import { editFunc, noteParam, updateNotesFunc } from "../types/types";
import { saveNotesList, getNotesList, getNumber } from "./store";

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

    // Initialize
    useEffect(()=>{
        // get note data
        updateUserNotesList(getNotesList());
    },[]);
    
    // Redisplay when userNotesList is updated
    useEffect(()=>{
        updateShowList(userNotesList);
    },[userNotesList]);

    // Display results when search terms are entered
    useEffect(()=>{
        if ('' !== searchWord) {
            resultSearch(searchWord, userNotesList, updateShowList)
        } else {
            updateShowList(userNotesList);
        }
    },[searchWord]);
    



/******************************************************************************
 * Function: editNote
 * Argument: text: string,
             index: number,
             userNotesList: noteParam[],
             updateUserNotesList: updateNotesFunc
 ******************************************************************************/
    const editNote: editFunc = (
        text:string,
        id:number,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ) =>{
        const index: number = userNotesList.findIndex((e)=>e.id===id);
        const nextUserNotesList: noteParam[] = userNotesList.slice();
        nextUserNotesList[index].text = text;
        updateUserNotesList(nextUserNotesList);

        // save list data
        saveNotesList(JSON.stringify(nextUserNotesList));
    } /***end of editNote Function*******************************************/



/******************************************************************************
 * Function: copyNote
 * Argument: id: number,
             userNotesList: noteParam[],
             updateUserNotesList: updateNotesFunc
 ******************************************************************************/
    function copyNote(
        id: number,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ){
        const noteValue: noteParam | undefined = userNotesList.find((e)=>e.id===id);
        if (undefined === noteValue) return;
        addNote(noteValue.text, userNotesList, updateUserNotesList);
    } /*** end of copyNote Function ******************************************/



/******************************************************************************
 * Function: changePinState
 * Argument: index: number,
             userNotesList: noteParam[],
             updateUserNotesList: updateNotesFunc
 ******************************************************************************/
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
    }  /*** end of changePinState Function ***********************************/



/******************************************************************************
 * Function: eraseNote
 * Argument: index: number,
             userNotesList: noteParam[],
             updateUserNotesList: updateNotesFunc
 ******************************************************************************/
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



/******************************************************************************
 * Function: addNote
 * Argument: value: string,
             userNotesList: noteParam[],
             updateUserNotesList: updateNotesFunc
 ******************************************************************************/
    function addNote(
        value: string,
        userNotesList: noteParam[],
        updateUserNotesList: updateNotesFunc
    ){
        // create new note 
        const newNote :noteParam = {
            id: getNumber(),
            text: value,
            pinState: false,
            date: new Date()
        };

        const nextUserNotesList: noteParam[] = [...userNotesList, newNote];
        updateUserNotesList(nextUserNotesList);

        // save list data
        saveNotesList(JSON.stringify(nextUserNotesList));

    }  /*** end of addNote Function ******************************************/



/******************************************************************************
 * Function   : resultSearch
 * Argument   : searchWord: string,
                userNotesList: noteParam[],
                updateUserNotesList: updateNotesFunc
 * Description: Display results when search terms are entered
 ******************************************************************************/
    const resultSearch = (
        searchWord: string,
        userNotesList:noteParam[],
        updateShowList: updateNotesFunc
    )=>{

        // cut out search words
        const searchWords: Array<string> = searchWord.split(' ').filter(e=>e);
    
        let result: Array<noteParam> = [];
    
        for (let i:number=0; i<searchWords.length; i++){
            const resultTemporary = (userNotesList.filter((note) => (
                note.text.toLowerCase().includes(searchWords[i].toLowerCase())))
            );
            resultTemporary.forEach((e)=>result.push(e))
        }
    
        // Remove duplicate search results
        const ret = Array.from(new Set(result));
    
        // update show list
        updateShowList(ret);
        
    } /*** end of resultSearch Function **************************************/



    return {
        userNotesList, updateUserNotesList,
        showList, updateShowList,
        searchWord, updateSearchWord,
        changePinState, copyNote, eraseNote, addNote, editNote,
        resultSearch
    }
} /*** end of noteControl Function *******************************************/



/** end of file */
