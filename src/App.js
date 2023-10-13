import { useState, useEffect } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
const {getData} = require("./db/db")
const foods = getData();

function App() {
  return (
    <div>
      <h1 className='heading'>Food OrDer</h1>
      <div className='cards__container'>
        {
          foods.map((food)=>{
            return(
              <Card food={food} key={food.id} />//onAdd={onAdd} onRemove={onRemove}
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
