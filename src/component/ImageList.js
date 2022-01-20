import React, { useState } from "react";
import ImageRender from "./ImageRender";

export default function ImageList(props) {
  const { keyword, currentTab } = props;

  const [unsplashImg, setUnsplashImg] = useState();
  const [giphyImg, setGiphyImg] = useState();
  const [pixabayImg, setPixabayImg] = useState();
  const [pexelsImg, setPexelsImg] = useState();

  async function fetchImage(url, key, searchText, headers = { mode: "cors" }) {
    let [apiKey, apiValue] = key;
    const [textKey, textValue] = searchText;

    if (apiKey !== "") {
      apiKey += "=";
      apiValue += "&";
    }

    const fetchUrl = url + "?" + apiKey + apiValue + textKey + "=" + textValue;

    console.log(fetchUrl);

    try {
      const result = await fetch(fetchUrl, headers);
      return result.json();
    } catch (err) {
      console.log(err);
    }
  }

  function getUnsplashImg(searchText) {
    if (!searchText) return;

    const unsplash = fetchImage(
      "https://api.unsplash.com/search/photos/",
      ["client_id", "6Ov3KOdo27AfsXQqutE4xuiwnEUKhSU_QlD9ShRN_bE"],
      ["query", searchText]
    );

    unsplash.then((response) => {
      setUnsplashImg(response.results[0].urls.regular);
    });
  }

  function getGiphyImg(searchText) {
    if (!searchText) return;

    const giphy = fetchImage(
      "https://api.giphy.com/v1/gifs/translate",
      ["api_key", "Ar8mA2giqZ68bIw9rv9vzSMrO17vmdSs"],
      ["s", searchText]
    );

    giphy.then((response) => {
      setGiphyImg(response.data.images.original.url);
    });
  }

  function getPixabayImg(searchText) {
    if (!searchText) return;

    const pixabay = fetchImage(
      "https://pixabay.com/api",
      ["key", "25325947-3933bc14bea566dd81407b83b"],
      ["q", searchText]
    );

    pixabay.then((response) => {
      setPixabayImg(response.hits[0].webformatURL);
    });
  }

  function getPexelsImg(searchText) {
    if (!searchText) return;

    const pexels = fetchImage(
      "https://api.pexels.com/v1/search",
      ["", ""],
      ["query", searchText],
      {
        headers: {
          Authorization:
            "563492ad6f91700001000001682ad028d6ad4d019adbd0959baa9d17",
        },
        mode: "cors",
      }
    );

    pexels.then((response) => {
      setPexelsImg(response.photos[0].src.original);
    });
  }

  function renderFromTab() {
    switch (currentTab) {
      case "giphy":
        return (
          <ImageRender
            image={giphyImg}
            getter={getGiphyImg}
            keyword={keyword}
          />
        );
      case "pixabay":
        return (
          <ImageRender
            image={pixabayImg}
            getter={getPixabayImg}
            keyword={keyword}
          />
        );
      case "pexels":
        return (
          <ImageRender
            image={pexelsImg}
            getter={getPexelsImg}
            keyword={keyword}
          />
        );
      default:
        return (
          <ImageRender
            image={unsplashImg}
            getter={getUnsplashImg}
            keyword={keyword}
          />
        );
    }
  }

  let display = renderFromTab();

  return (
      <>{display}</>
  );
}
