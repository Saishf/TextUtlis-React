import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted to uppercase", "success")
  };
  const handledownClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted to Lowercase", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let len = text.split(" ").length;
 

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'light'}}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        {" "}
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handledownClick}>
        {" "}
        Convert to lowercase
      </button>
    </div>

    <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{len} words , {text.length} characters</p>
        <p> {(text.split(" ").length)*0.008} minutes to read text</p>
        <p>Preview</p>
        <p>{text}</p>
        
    </div>
    </>
  );
}
