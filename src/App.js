import "./App.css";
import { useState } from 'react'
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";

function App(){
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const toggleColor = () =>{
      if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = 'rgb(6 59 78)';
          displayAlert("Success","Dark Mode Enabled");
      } else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          displayAlert("Success","Light Mode Enabled")
      }
  }

  const displayAlert = (type, message) =>{
    setalert({
      message: message,
      typ: type
    })
    setTimeout(function (){
      setalert(null)
    }, 1500)
  }


  return (
    <>
      <Navbar title="TextChanger" primary="Home" mode={mode} toggleColor={toggleColor}/>
      <div> <Alert alert={alert}/> </div>
      <div className="container my-3"> 
      <TextBox heading="Enter text below: " mode={mode} displayAlert={displayAlert}/>
      </div>  
      {/* <About/> */}
    </>
  );
}

export default App;
