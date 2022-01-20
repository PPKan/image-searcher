import React from "react";

export default function TabButtons(props) {
  const { setCurrentTab } = props;

  return (
    <div className="tab-button-container">
      <button className="btn" name="giphy" onClick={(e) => {setCurrentTab(e.target.name)}}>Giphy</button>
      <button className="btn" name="unsplash" onClick={(e) => {setCurrentTab(e.target.name)}}>Unsplash</button>
      <button className="btn" name="pixabay" onClick={(e) => {setCurrentTab(e.target.name)}}>Pixabay</button>
      <button className="btn" name="pexels" onClick={(e) => {setCurrentTab(e.target.name)}}>Pexels</button>
    </div>
  );
}
