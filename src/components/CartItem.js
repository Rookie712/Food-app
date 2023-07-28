import React from 'react';
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={classes.mainCartItem}>
    <div className={classes["main-cart-item"]}>
        <div className={classes['first-header']}> 
            <h3>{props.item.title}</h3>
            <div className={classes['price']}>
            <h4>{props.item.price}</h4>
            <h4 className={classes.piece}>x {props.item.amount}</h4>
            </div>
        </div>
        <div className={classes.cartItemButton}>
            <button onClick={props.onRemove}>-</button>
            <button onClick={props.onAdd}>+</button>
        </div>
    </div>
    <hr/>
    </div>
  )
}

export default CartItem;
