
// note type
export type noteParam = {
    id: number;
    text: string;
    pinState: boolean;
    date: Date;
}

export type updateNotesFunc = (
    newNotes: noteParam[]
) => void;

export type noteFunc = (
    id: number,
    notesList: noteParam[],
    updateNotesList: updateNotesFunc
) => void;

export type editFunc = (
    text:string,
    index:number,
    userNotesList: noteParam[],
    updateUserNotesList: updateNotesFunc
) => void;

export type addFunc = (
    text: string,
    notesList: noteParam[],
    updateNotesList: updateNotesFunc
) => void;