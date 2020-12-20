import './App.css';
// import {useEffect, useState} from 'react';
import Canvas from './js/Canvas';
import Chat from './js/Chat';
import Hunger from './js/Hunger';
import A2HS from './js/A2HS';

function App() {
  const width = 1280;
  const height = 720;
  return (
    <div className = 'container'>
      <div
      className = 'sub-container'
      width={width}
      height={height}>
        <Canvas w={width} h={height}/>
        <Hunger/>
        <Chat/>
        <A2HS/>
      </div>
    </div>
  );
}

export default App;
