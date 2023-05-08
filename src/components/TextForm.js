import React, { useRef, useState } from "react";

export default function TextForm(props) {
  const refElement = useRef()
  const [text, setText] = useState("");

  const handelUpClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLoClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClearClick = () => {
    // console.log("Upper case was clicked");
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleColor = () => {
    refElement.current.style.color = "blue";
  };
  const handleBold = () => {
    refElement.current.style.fontWeight = "bold";
  };
  const handleItaliac = () => {
    refElement.current.style.fontStyle = "italic";
  };
  const handelOnChange = (e) => {
    // console.log("on change");
    setText(e.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="12"
            value={text}
            ref = {refElement}
            onChange={handelOnChange}
            style={{backgroundColor:props.mode === 'dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleColor}>
          Change color
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleBold}>
          BOLD
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleItaliac}>
          Italiac
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}} >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters
        </p>
        <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}
