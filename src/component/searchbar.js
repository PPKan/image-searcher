import React, { useState } from "react";
import searchButton from '../images/search-button.png'

export default function SearchBar(props) {
  const [value, setValue] = useState();

  const { setKeyword, getAllImg } = props;

  return (
    <>
      <form
        onSubmit={(e) => {
          getAllImg(value)
          e.preventDefault();
          setKeyword(value);
        }}
        className="search-bar"
      >
        <input className="input-text" type="text" onChange={(e) => setValue(e.target.value)}></input>
        <input className="input-img" type="image" src={searchButton} border="0" alt="Submit" />
      </form>
    </>
  );
}
