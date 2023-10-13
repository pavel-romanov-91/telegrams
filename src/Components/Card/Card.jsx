import React from 'react'
import "./Card.css"
import { useState } from 'react'
import Button from '../Button/Button';

function Card(food, onAdd, onRemove) {
    const[count, setCount] = useState(0);
    const {title, Image, price, id} = food
    const handleIncrement = () => {
        setCount(count +1);
        // onAdd(food)
    }
    const handleDecrement = () => {
        setCount(count -1);
        // onRemove(food)
    }
  return (
    <div className='Card'>
        <span className={`${count !==0 ? 'card__badge' : 'card__badge--hidden'}`}>
            {count}
        </span>
        <div className='image__container'>
            <img src = {Image} alt = {title}></img>
        </div>
        <h4 className='card__title'>
            {title} . <span className='card__price'>$ {price}</span>
        </h4>
        <div className='btn-container'>
            <Button title={'+'} type={'add'} onClick={handleIncrement}>
                {count !==0? (
                    <Button title={'-'} type={'remove'} onClick={handleDecrement}></Button>):('')}
            </Button>
        </div>
    </div>
  )
}

export default Card