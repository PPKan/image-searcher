import React, { useState } from "react";
import searchButton from "../images/search-button.png";

export default function SearchBar(props) {
  const [value, setValue] = useState();

  const { getAllImg } = props;

  return (
    <>
      <form
        onSubmit={(e) => {
          getAllImg(value);
          e.preventDefault();
        }}
        className="search-bar"
      >
        <input
          className="input-text"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="cats"
        ></input>
        <input
          className="input-img"
          type="image"
          src={searchButton}
          border="0"
          alt="Submit"
        />
      </form>
    </>
  );
}
