import React,{useReducer} from 'react';
import CartContext from './CartContext';
const defaultCartItem={
  items:[],
  totalAmount:0
}
const cartReducer = (state,action)=>{
  if(action.type==="ADD"){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex((item)=> item.id === action.item.id)
    const newItem = state.items[existingItemIndex];
    let updatedItems;
    if(newItem){
      const updateItem={
        ...action.item,
        amount:newItem.amount + action.item.amount
      }
      updatedItems=[...state.items];
      updatedItems[existingItemIndex]=updateItem;
    }
    else{
      updatedItems=state.items.concat(action.item);
    }
    return {items:updatedItems,totalAmount:updatedTotalAmount}
  }
  if(action.type === "REMOVE"){
    const existItemIndex =  state.items.findIndex(item=> item.id === action.id)
    const existItem = state.items[existItemIndex];
    const updatedTotalAmount = state.totalAmount - existItem.price;
    let updatedItems;
    if(existItem.amount === 1){
      updatedItems = state.items.filter((item)=>{
        if(item.id != action.id){
          return item
        }
      })
    }
    else{
      const updatedItem = {...existItem,amount:existItem.amount-1};
      updatedItems = [...state.items];
      updatedItems[existItemIndex]=updatedItem;
    }
    return({items:updatedItems,totalAmount:updatedTotalAmount});
  }
  return state;
}
const CartContextProvider = (props) => {
    const [cartState,dispatchCartReducer]=useReducer(cartReducer,defaultCartItem);
    const addCartItemHandler=(item)=>{
      dispatchCartReducer({type:"ADD",item:item})
    }
    const removeCartItemHandler=(id)=>{
      dispatchCartReducer({type:"REMOVE",id:id})
    }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addCartItemHandler,
        removeItem:removeCartItemHandler
    }
  return(
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}

export default CartContextProvider;
