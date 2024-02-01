import React from "react";
import { useState, useEffect } from "react";
import MemeImage from "./MemeImage";
export default function Form() {
  //USE STATE HOOK TO SET THE IMAGE AND ALT TEXT
  //USE STATE is a function that returns an array with two elements
  //The first element is the state variable itself
  //The second element is a function that allows us to update the state variable
  //In simple words, the first element is the state variable and the second element is the setter function
  //The setter function is used to update the state variable
  //The setter function takes one argument which is the new value of the state variable
  //The setter function is called whenever we want to update the state variable
  //The setter function is called inside an event handler function

  /* 
  Changes the state of the meme OBJECT
  The meme object has three properties
  and i only render the image property
  and changes the state of it with 
  the setMeme function
 */
  const [meme, setMeme] = useState({
    id: 0,
    TopText: "",
    BottomText: "",
    ImageURL: "",
  });

  /*
This state takes in the ARRAY of IMAGES from the Images.js file
and sets the state of the allMemes variable
and will update the state of the allMemes variable
with setAllMemes function
*/
  const [allMemes, setAllMemes] = useState([]);
  //This function handles the change of the input fields and listens for changes
  //This is the correct way to handle form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target; //destructuring the event object
    setMeme((prevImage) => {
      return {
        ...prevImage,
        [name]: type === "checkbox" ? checked : value, //This is essentially the same as [event.target.name]: event.target.value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent the default behaviour of the form
    //This part of the code gets the data from the images.Js therefore i need to import the images.js file
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomIndex].url;
    const randomId = allMemes[randomIndex].id;
    setMeme((prevImage) => {
      return {
        ...prevImage,
        id: randomId,
        ImageURL: randomMeme,
      };
    });
  };
  useEffect(() => {
    //The code we want to run when the component mounts
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));

    // An optional return statement
    return () => {
      console.log("Change image");
    };
  }, []); // The empty array is the dependency array that listens when there are changes and updates the state;
  return (
    <div>
      <div className="Form">
        <main>
          <form action="" onSubmit={handleSubmit}>
            <div className="InputContainer">
              <input
                id="TopText"
                type="text"
                onChange={handleChange}
                value={meme.TopText}
                name="TopText"
              />
              <input
                id="BottomText"
                type="text"
                onChange={handleChange}
                value={meme.BottomText}
                name="BottomText"
              />{" "}
            </div>
            <button id="SubmitButton">generate random meme</button>
          </form>
        </main>
      </div>
      {meme.ImageURL && (
        <MemeImage
          image={meme.ImageURL}
          TopText={meme.TopText}
          BottomText={meme.BottomText}
        />
      )}
    </div>
  );
}
