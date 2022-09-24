import React from "react";

function CategoryFilter({categories, CATEGORIES ,setCategories}) {
  const button = CATEGORIES.map ((cat) => {
    const className = cat === categories ? "selected" : null
    return(<button 
    className={className}
    //whatever it clicks is what will be shown
    onClick= {() => setCategories(cat)}
    key={cat}
    >{cat}</button> )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {button}
    </div>
  );
}

export default CategoryFilter;
