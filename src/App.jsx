import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import ClipLoader from "react-spinners/ClipLoader";

const loaderStyle = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
  position: "absolute"
};

function App() {
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    // This code runs after the component is rendered, similar to componentDidMount
    // console.log('Component did mount!');
    fetchAdvice();  
  }, []);

  const fetchAdvice = () => {
    setLoading(true);
    // setAdvice('');
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      const { advice } = response.data.slip;
      console.log(advice);
      setLoading(false);
      setAdvice(advice);
    }).catch( err => {
      console.log(err);
      setLoading(false);
    });
  }

  return (
    <div className='app'>
      {loading && 
      (<ClipLoader
        color='#10bcbe'
        loading={loading}
        cssOverride={loaderStyle}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />)}
      <Card onLoad={ loading } fetchAdvice={ fetchAdvice } advice={ loading ? "" : "\"" + advice + "\"" } />
    </div>
  );
}

export default App;
