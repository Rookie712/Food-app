import React, { useContext } from 'react';
import classes from "./DishItem.module.css";
import DishItemForm from './DishItemForm';
import CartContext from '../store/CartContext';

const DishItem = (props) => {
  const ctx = useContext(CartContext);
  const addToCartHandler = (amount)=>{
    ctx.addItem({
      id:props.data.id,
      title:props.data.title,
      price:props.data.price,
      amount:amount
    })
  }
  const price=`Rs ${props.data.price.toFixed()}`
  return (
    <div className={classes["main-item"]}>
        <img src={props.data.lnk}/>
        <h1>{props.data.title}</h1>
        <h3>{price}</h3>
        <div>
          <DishItemForm onAddToCart={addToCartHandler}/>
        </div> 
    </div>
  )
}

export default DishItem;
