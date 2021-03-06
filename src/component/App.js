import React, { useEffect, useState } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import TabButtons from "./TabButtons";
import "../css/app.scss";
import githubIcon from "../images/GitHub-Mark.png";

function App() {
  const [currentTab, setCurrentTab] = useState("unsplash");

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

    // console.log(fetchUrl);

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
            "563492ad6f91700001000001ed2ffdc6bfbf48a091ee9a6f0bd2f44f",
        },
        mode: "cors",
      }
    );

    pexels.then((response) => {
      setPexelsImg(response.photos[0].src.original);
    });
  }

  function getAllImg(keyword) {
    getGiphyImg(keyword);
    getPixabayImg(keyword);
    getPexelsImg(keyword);
    getUnsplashImg(keyword);
  }

  useEffect(() => {
    getAllImg("cat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="head">
          <h1>Multi-source Image Searcher</h1>
          <SearchBar getAllImg={getAllImg} />
        </div>
        <TabButtons setCurrentTab={setCurrentTab} currentTab={currentTab} />
        <ImageList
          currentTab={currentTab}
          unsplashImg={unsplashImg}
          giphyImg={giphyImg}
          pixabayImg={pixabayImg}
          pexelsImg={pexelsImg}
        />
        <footer>
          Powered by &nbsp;
          <a
            href="https://github.com/PPKan/image-searcher"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github icon" /> PPKan
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
