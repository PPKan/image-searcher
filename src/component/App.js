import React, { useState } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import TabButtons from "./TabButtons";
import "../css/app.scss";

function App() {
  const [keyword, setKeyword] = useState("cat");
  const [currentTab, setCurrentTab] = useState("unsplash");

  return (
    <>
      <div className="container">
        <div className="head">
          <h1>Multi-source Image Searcher</h1>
          <SearchBar setKeyword={setKeyword} />
        </div>
        <TabButtons setCurrentTab={setCurrentTab} />
        <ImageList keyword={keyword} currentTab={currentTab} />
      </div>
    </>
  );
}

export default App;
