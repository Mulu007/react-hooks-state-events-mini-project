import React from "react";
//the function name should be the as same the imported name
import Task from "./Task";

//props are passed down from the parent ....theyre put inside {}
function TaskList({tasks, handleDelete}) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => 
      <Task 
        key = {task.text}
        text = {task.text}
        category = {task.category} 
        handleDelete = {handleDelete}
      />)}
      
    </div>
  );
}

export default TaskList;
