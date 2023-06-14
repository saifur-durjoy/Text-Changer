import React, { useState } from 'react'

function About(props) {
  const [myStyle, setmyStyle] = useState({
        backgroundColor: 'white',
        color: 'black',
  });

  const [buttonText, setbuttonText] = useState('Light Mode')

  const switchMode = () =>{
       if (myStyle.backgroundColor === '#212529' && myStyle.color === 'white') {
            setmyStyle({
                backgroundColor: 'white',
                color: 'black',
            })
            setbuttonText('Dark Mode')
       } else { 
            setmyStyle({
                backgroundColor: '#212529',
                color: 'white',
                border: '1px solid white'
            })
            setbuttonText('Light Mode')
       }
  }

  return (
    <div className="mx-5" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion my-2" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong>.....
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> ....
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button  className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> ......
                </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center my-3">
        <button onClick={switchMode} type="button" className="btn btn-success">{buttonText}</button>
        </div>
    </div>
  )
}

export default About