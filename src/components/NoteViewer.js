import React,{useEffect, useState} from "react";

function NoteViewer({notes,editMode}) {
  //console.log("noteViewer")


  return (
    <>
      <h2>{notes.title}</h2>
      <p>{notes.body}</p>
      <button onClick={editMode}>Edit</button>
    </>
  );
}

export default NoteViewer;
