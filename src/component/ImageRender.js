import React from "react";

export default function ImageRender(props) {
  const { image } = props;

  return (
    <div className="img-container">
      <div className="img-inner-container">
        <img alt="" src={image} />
      </div>
    </div>
  );
}
