import React, { useRef } from "react";

export default function TabButtons(props) {
  const { setCurrentTab } = props;

  const giphy = useRef();
  const unsplash = useRef();
  const pixabay = useRef();
  const pexels = useRef();

  function handleClassName(e) {
    
    const incomingName = e.target.name
    
    setCurrentTab(incomingName);

    giphy.current.className = "btn";
    unsplash.current.className = "btn";
    pixabay.current.className = "btn";
    pexels.current.className = "btn";

    const refList = [giphy, unsplash, pixabay, pexels];

    refList.forEach((ref) => {
      if (ref.current.name === incomingName) {
        ref.current.className += " btn-active";
      }
    });
  }

  return (
    <div className="tab-button-container">
      <button
        ref={giphy}
        className="btn"
        name="giphy"
        onClick={(e) => {
          handleClassName(e);
        }}
      >
        Giphy
      </button>
      <button
        ref={unsplash}
        className="btn btn-active"
        name="unsplash"
        onClick={(e) => {
          handleClassName(e);
        }}
      >
        Unsplash
      </button>
      <button
        ref={pixabay}
        className="btn"
        name="pixabay"
        onClick={(e) => {
          handleClassName(e);
        }}
      >
        Pixabay
      </button>
      <button
        ref={pexels}
        className="btn"
        name="pexels"
        onClick={(e) => {
          handleClassName(e);
        }}
      >
        Pexels
      </button>
    </div>
  );
}
