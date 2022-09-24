import React from "react";

//tasklist is the parent of task
function Task({text, category, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDelete(text)} >X</button>
    </div>
  );
}

export default Task;
