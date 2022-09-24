import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, CATEGORIES}) { 
  const [onForm, setOnForm] = useState({text: "" , category: "Code"})

  //name is what is inside 
  //value is what user types
  const handleChange = (event) => {setOnForm({...onForm , [event.target.name] : event.target.value})}

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(onForm)
    } 
  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {CATEGORIES.map(cate => 
          <option key={cate}>
            {cate}
          </option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
