import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
//import { Grid } from 'office-ui-fabric-react';


function App() {
  const [data, setData] = useState({});
  const { title, explanation, url } = data;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
        'https://api.nasa.gov/planetary/apod?api_key=MxUtdcM3GzaXzE5K3obxNxC2hEol2r6TQnH8Oet8',
        );
        setData(result.data);
      };
      fetchData();
    }, []);
    
  
    console.log({data});

  return (
    <div className="App ms-Grid">
      <header className="header ms-Grid-row" >
        <h1>Las super nenas galácticas</h1>
        <img className="ms-Grid-col ms-sm12 image_header" src={url} alt="Sam"/>
      </header>
      <main>
        <h2>{title}</h2>
        <p className="parrafo">{explanation}</p>
        </main>    
    </div>
  );
}

export default App;
