import React, {useState} from 'react';


/**
 * 
 */
const TextForm = (props) => {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleOnChange=(event)=>{

        setText(event.target.value)
    }
    const [text,setText]=useState('');
    
    return <> <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="7" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary </h2>
    <p>{text.split(" ").length} words and  {text.length} characters</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter Something to Preview"}</p>
    </div>
    </>
}



export default TextForm;