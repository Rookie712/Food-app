import React,{useState,useContext} from 'react';
import classes from "./Header.module.css";
import Info from './Info';
import Cart from './Cart';
import CartContext from '../store/CartContext';
const Header = (props) => {
 
  const [openCart,setCart] = useState(true);

  const cartHandler =(event)=>{
    setCart(false);
  }
 const hideCart=(event)=>{
  setCart(true);
 }
 const ctx=useContext(CartContext);
 const numberOfItem = ctx.items.reduce((number,item)=>{
  console.log(number + item.amount)
  return number + item.amount;
 },0);
 
  return (
    <div className={classes["main-head"]}>
        <div className={classes["name-head"]}>
            <h1>Food Kings</h1>
            <button onClick={cartHandler}><i className={`fa-solid fa-cart-shopping cart ${classes.cart}`}></i> Your cart <span className={classes.itemNo}>{numberOfItem}</span> </button>
        </div>
        <Info></Info>
        {!openCart && <Cart cancel={hideCart}/>}
        
    </div>
  )
}

export default Header;
