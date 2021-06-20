import React,{useState} from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes,setNote }) {
 // console.log(notes)
  return (
    <ul>
      {notes.map(notes => <NoteItem notes={notes} setNote={setNote}/>
        )
      }      
    </ul>
  );
}

export default NoteList;
