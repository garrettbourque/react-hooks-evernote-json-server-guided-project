import React from "react";

function NoteItem({ notes,setNote }) {
  //console.log(note)
  const selectNote=()=>{
  setNote(notes)
  }

  return (
    <li onClick={selectNote}>
      <h2>{notes.title}</h2>
      <p>{notes.body.substring(0,12)+"..."}</p>
    </li>
  );
}

export default NoteItem;
