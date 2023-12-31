import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleCopyClick = async () => {
    let s = text;
    s = String(s);

    await navigator.clipboard.writeText(s);
    props.showAlert("Text copied to clipboard", "success");
  };  
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#02041f'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length===0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length===0}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} disabled={text.length===0}>
          Copy to clipboard
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#02041f'}}>
        <h2>Your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text"}</p>
      </div>
    </>
  );
}
