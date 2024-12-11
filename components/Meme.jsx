import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
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
      <img className="meme--image" src={memeImage}></img>
    </main>
  );
}
