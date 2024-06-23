
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');  //tells wether darkmode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode= ()=>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#191d21';
      showAlert("Dark Mode has been Enabled.","success");
      document.title="TextProcessor : DarkMode";
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled.","success");
      document.title="TextProcessor : LightMode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextProcessor" aboutText="About Us" mode={mode} toggleMode={toggleMode} />       {/* Passing props to Navbar.js */}
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
            <Route eaxct path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          
      </Routes>

    </div>
</Router>
    </>
  
  );
}

export default App;
