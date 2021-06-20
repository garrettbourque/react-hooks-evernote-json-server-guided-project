import React from "react";

function Search({fNote, setFNote}) {
  function handleChange(event){
    setFNote(event.target.value)
      //console.log(fNote)
  }
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" value={fNote} onChange={handleChange} />
    </div>
  );
}

export default Search;
