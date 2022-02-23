import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,msgType)=>{
    setAlert({
      msg:message,
      msgType:msgType
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggelSwitch=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#382c78";
      showAlert("Dark Mode Enabeled","success")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabeled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Monkey.D.Luffy" navLight={mode} toggelSwitch={toggelSwitch}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Switch>
          <Route exact path="/About">
                <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter text below to analyze here" navLight={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
