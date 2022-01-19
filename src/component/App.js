import React, {useState} from 'react'


function App() {

  const [unSplashImg, setUnsplashImg] = useState();

  async function fetchImage(url, key, searchText) {
    let resultUrl;

    const [apiKey, apiValue] = key;
    const [textKay, textValue] = searchText;
    const fetchUrl =
      url + "?" + apiKey + "=" + apiValue + "&" + textKay + "=" + textValue;

    const result = await fetch(fetchUrl, { mode: "cors" });
    result.json().then((response) => {
      setUnsplashImg(response.results[0].urls.regular);
    });
  }

  fetchImage(
    "https://api.unsplash.com/search/photos/",
    ["client_id", "6Ov3KOdo27AfsXQqutE4xuiwnEUKhSU_QlD9ShRN_bE"],
    ["query", "cats"]
  )

  return (
    <>
      <h1>Hello World</h1>
      <div>
        <img alt="cat form unsplash" src={unSplashImg} />
      </div>
    </>
  );
}

export default App;
