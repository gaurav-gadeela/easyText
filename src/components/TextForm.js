import React, { useState } from 'react'

export default function TextForm(props) {
    const handelUpButton=()=>{
        console.log("clicked button: "+text);
        //console.log(text);
        let newText=text.toUpperCase();
        textFunc(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handelOnChange=(event)=>{
        console.log("onchange");
        textFunc(event.target.value);
    }

    const handelLowButton=()=>{
        console.log("clicked button: "+text);
        //console.log(text);
        let newText=text.toLowerCase();
        textFunc(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handelClearButton=()=>{
        textFunc("");
        props.showAlert("Text Cleared","success")
    }

    const handelCapitalizeButton=()=>{
        let arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        let str2 = arr.join(" ");
        textFunc(str2);

        props.showAlert("Capitalized","success")
    }

    const handelRemoveSpacesButton=()=>{
        let newString = text.split(/[ ]+/);
        textFunc(newString.join(" "))

        props.showAlert("Spaces removed","success")
    }


    const [text, textFunc] = useState('Enter the text here');
    //setText("Gaurav_Gadeela")
    return (
        <>
        <div className="container" style={{color:props.navLight==='light' ? 'black' : 'white'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" onChange={handelOnChange} style={{backgroundColor: props.navLight==='light' ? 'white' : 'black',color: props.navLight==='light' ? 'black' : 'white'}} value={text} id="textid" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handelUpButton}>Covert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handelLowButton}>Covert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handelCapitalizeButton}>Capitalize Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handelRemoveSpacesButton}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handelClearButton}>Clear Text</button>
        </div>
        <div className="container my-4" style={{color:props.navLight==='light' ? 'black' : 'white'}}>
            <h2>Text Summary</h2>
            <p>  {  `${text.length}`>0   ?    (`${text.charAt((text.length)-1)}` === ' ' ? `${text.split(' ').length-1}` : `${text.split(' ').length} `) : 0}  Words and {text.length} Characters</p>
            <p>{0.008 * (`${text.length}`>0   ?    (`${text.charAt((text.length)-1)}` === ' ' ? `${text.split(' ').length-1}` : `${text.split(' ').length} `) : 0)  } Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Please type something above to show preview"}</p>
        </div>
        </>
    )
}
