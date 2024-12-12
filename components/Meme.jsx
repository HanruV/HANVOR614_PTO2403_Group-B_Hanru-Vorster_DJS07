import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <div>
          <label htmlFor="top-text">Top Text</label>
          <input
            id="top-text"
            type="text"
            placeholder="Shut up"
            className="form--input"
          />
        </div>
        <div>
          <label htmlFor="bottom-text">Bottom Text</label>
          <input
            id="bottom-text"
            type="text"
            placeholder="and take my money"
            className="form--input"
          />
        </div>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme--image" src={meme.randomImage}></img>
    </main>
  );
}
