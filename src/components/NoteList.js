import React,{useState} from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes,setNote, foundNote }) {
  //console.log(foundNote)
  return (
    <ul>
      {foundNote.map(notes => <NoteItem notes={notes} setNote={setNote}/>
        )
      }      
    </ul>
  );
}

export default NoteList;
