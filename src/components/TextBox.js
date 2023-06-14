import React, {useState} from "react";
import PropTypes from 'prop-types'

function TextBox(props) {
  const [text, setText] = useState('');

  const convertUpCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.displayAlert("Success", "Converted to Uppercase");
  }

  const convertLowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.displayAlert("Success", "Converted to Lowercase")
  }

  const clearText = function (){
    let newText = "";
    setText(newText);
    props.displayAlert("Success", "Cleared Input")
  }

  const copyText = function (){
    let copyText = document.getElementById("mytextarea");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.displayAlert("Success", "Copied to Clipboard")
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const modeStyle = {
      color: props.mode === 'dark' ? 'white' : 'black',
      backgroundColor: props.mode === 'dark' ? 'rgb(6 59 78)' : 'white'
  }

  const textAreaStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(48 57 67)' : 'white'
}

  return (
    <>
      <div className="container" style={modeStyle}>
        <h3 > {props.heading} </h3>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange}
         id="mytextarea" rows="8" style={textAreaStyle}> </textarea>
        </div>      
        <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'primary'} my-2 mx-2 ${text.length === 0 ? 'disabled' : 'enabled'}`} onClick={convertUpCase}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'primary'} my-2 mx-2 ${text.length === 0 ? 'disabled' : 'enabled'}`} onClick={convertLowerCase}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'primary'} my-2 mx-2 ${text.length === 0 ? 'disabled' : 'enabled'}`} onClick={copyText}>Copy Text</button>
        <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'primary'} my-2 mx-2 ${text.length === 0 ? 'disabled' : 'enabled'}`} onClick={clearText}>Clear Text</button>
      </div>

      <div className="conatainer my-4" style={modeStyle}>
        <h3>Text Summary </h3>
        <p>{text.length===0 ? text.split(" ").length-1 : text.split(" ").length} words {text.length} characters</p>
        <p>{(0.003)*(text.length === 0 ? text.split(" ").length-1 : text.split(" ").length)} minutes required to read</p>
        <h3>{text.length === 0 ? 'Write something for preview' : 'Preview'} </h3>
        <p>{text}</p>
      </div>
    </>
  );
}

TextBox.propTypes = {heading: PropTypes.string.isRequired}
// TextBox.defaultProps = {heading: 'Enter Text'}

export default TextBox;

