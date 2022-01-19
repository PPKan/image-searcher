import React from 'react';

export default function ImageRender(props) {

  const {
    image,
    getter,
    keyword
  } = props

  getter(keyword);

  return <img alt="" src={image} />;
}
