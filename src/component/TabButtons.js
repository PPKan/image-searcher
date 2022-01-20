import React from "react";

export default function TabButtons(props) {
  const { setCurrentTab } = props;

  return (
    <div className="tab-button-container">
      <button name="giphy" onClick={(e) => {setCurrentTab(e.target.name)}}>Giphy</button>
      <button name="unsplash" onClick={(e) => {setCurrentTab(e.target.name)}}>Unsplash</button>
      <button name="pixabay" onClick={(e) => {setCurrentTab(e.target.name)}}>Pixabay</button>
      <button name="pexels" onClick={(e) => {setCurrentTab(e.target.name)}}>Pexels</button>
    </div>
  );
}
