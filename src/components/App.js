import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [categories, setCategories] = useState("All")
    const handleDelete = (text) => {
      //to not show the text which is deleted
      const newTask = tasks.filter((task) => task.text !== text )
      setTask(newTask)
    };

    const categoriesFilter = tasks.filter((task) => categories === "All" || task.category === categories)

function onTaskFormSubmit (newTask) {
  setTask([...tasks, newTask]) 
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={categories} 
      CATEGORIES = {CATEGORIES} 
      setCategories={setCategories}
      />
      <NewTaskForm 
      CATEGORIES={CATEGORIES.filter((categories) => categories !== "All")} 
      onTaskFormSubmit={onTaskFormSubmit} 
      />
      <TaskList 
      tasks={categoriesFilter} 
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
