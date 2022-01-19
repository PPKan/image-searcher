import React, { useState } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import TabButtons from "./TabButtons";

function App() {
  const [keyword, setKeyword] = useState("cat");
  const [currentTab, setCurrentTab] = useState('unsplash')

  return (
    <>
      <h1>Hello World</h1>
      <div>
        <SearchBar setKeyword={setKeyword} />
        <TabButtons setCurrentTab={setCurrentTab}/>
        <div className="tab-container">
          <ImageList keyword={keyword} currentTab={currentTab}/>
        </div>
      </div>
    </>
  );
}

export default App;
