import React from "react";

export default function ImageRender(props) {
  const { image, getter, keyword } = props;

  getter(keyword);

  return (
    <div className="img-container">
      <img alt="" src={image} />
    </div>
  );
}
