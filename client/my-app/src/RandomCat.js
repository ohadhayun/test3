import React, { useState } from 'react';
import './App.css';
const axios = require('axios');


// const onSubmit = async (data) => {
//   const answer = await axios.getRandom('http://localhost:3001/', data);
//   console.log(answer);
//   // console.log(data);
//   // console.log(JSON.stringify(data));
// } 

function RandomCat() {
  const [src, setSrc] = useState("https://cdn2.thecatapi.com/images/X5uLgPE0o.jpg");

  const changePic = async () => {
    const answer = await axios.get('http://localhost:3001/catapi/random');
    console.log(answer.data[0].url);
    setSrc(answer.data[0].url);
    // setSrc(data)
    // console.log(answer);
  }

  return (
    <div className="App">
      <img src={src} alt="cat" width="400" height="400" />
      <button onClick={changePic}> Click Me</button>
    </div>
  );
}

export default RandomCat;
