import React, { useState } from "react";

export default function SearchBar(props) {
  const [value, setValue] = useState();

  const { setKeyword } = props;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setKeyword(value);
        }}
      >
        <input type="text" onChange={(e) => setValue(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
