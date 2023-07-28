import React, {useContext} from 'react';
import classes from "./Cart.module.css";
import CartItem from './CartItem';
import Modal from './Modal';
import CartContext from '../store/CartContext';
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount =`Rs ${ctx.totalAmount.toFixed()}`;
  const hasItem = ctx.items.length>0;
  const cartItemRemoveHandler = (id)=>{
    ctx.removeItem(id);
  }
  const cartItemAddHandler = (item)=>{
    ctx.addItem(item);
  }
  return (
    <Modal backdropClick={props.cancel}>
        <div >
          <div className={classes.cartItem}>
        {ctx.items.map((data)=>(
          <CartItem item={data} onAdd={cartItemAddHandler.bind(null,data)} onRemove={cartItemRemoveHandler.bind(null,data.id)} />
        ))}
        </div>
        <div className={classes.bill}>
          <h1>Total Amount</h1>
          <h3>{totalAmount}</h3>
        </div>
        <hr></hr>
        <div className={classes.cartMainButton}>
        <button className={classes.cartButton} onClick={props.cancel}>Close</button>
        {hasItem && <button className={classes.order}>Order</button>}
        </div>
        </div>
    </Modal>
  )
}

export default Cart;
