import React,{useEffect, useState} from "react";

function NoteViewer({notes}) {
  //console.log("noteViewer")
  return (
    <>
      <h2>{notes.title}</h2>
      <p>{notes.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
