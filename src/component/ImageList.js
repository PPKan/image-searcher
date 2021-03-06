import React from "react";
import ImageRender from "./ImageRender";

export default function ImageList(props) {
  const { currentTab, unsplashImg, giphyImg, pixabayImg, pexelsImg } = props;

  function renderFromTab() {
    switch (currentTab) {
      case "giphy":
        return (
          <ImageRender
            image={giphyImg}
          />
        );
      case "pixabay":
        return (
          <ImageRender
            image={pixabayImg}
          />
        );
      case "pexels":
        return (
          <ImageRender
            image={pexelsImg}

          />
        );
      default:
        return (
          <ImageRender
            image={unsplashImg}
          />
        );
    }
  }

  let display = renderFromTab();

  return <>{display}</>;
}
