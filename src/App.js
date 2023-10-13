import { useState, useEffect } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
const {getData} = require("./db/db")

function App() {
  return (
    <div>
      <h1>Hi i am shopoBot</h1>
      <Button type={'add'} title={'+'} disable={'false'}></Button>
      <Button type={'remove'} title={'-'} disable={'false'}></Button>
      <Button type={'checkout'} title={'checkout'} disable={'false'}></Button>
    </div>
  );
}

export default App;
