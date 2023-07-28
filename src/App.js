import './App.css';
import Header from './components/Header';
import React,{useState,useReducer}   from 'react';
import Dishes from './components/Dishes';
import CartContextProvider from './store/CartContextProvider';
// const cartReducer = (state,action)=>{
//   if(state.main.length === 0){
//     return {main:[...state,action]}
//   }
  // else{
  //   const newArr = [];
  //   const newDummyArr = state.main; 
  //   newArr = newDummyArr.map((item)=>{
  //     if(action.id === item.id){
  //       return {...item,piece:item.piece+1}
  //     }
  //     else{
  //       return {...item}
  //     }
  //   })
  //   return {main:newArr}
  // }
// }
function App() {
  const mealData=[
    {id:Math.random().toString(),title:"Pav Bhaji",price:80,lnk:"https://www.rajbhog.com/wp-content/uploads/2021/02/Pav-Bhaji-870x635.jpg"},
    {id:Math.random().toString(),title:"Burger",price:60,lnk:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80"},
    {id:Math.random().toString(),title:"Omlete",price:100,lnk:"https://www.mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy.jpg"},
    {id:Math.random().toString(),title:"Noodle",price:70,lnk:"https://c.ndtvimg.com/2022-03/brodu8s_noodles_625x300_02_March_22.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384"},
    {id:Math.random().toString(),title:"Momos",price:50,lnk:"https://www.vegrecipesofindia.com/wp-content/uploads/2016/09/whole-wheat-veg-momos-recipe-1.jpg"}
  ]

  // const [cartData,setCartData] = useReducer(cartReducer,{
  //   main:[],
  // });
 
  
  return (
    <CartContextProvider>
    <div className='App'>
      <div className='first-header'>
      <Header/>
      </div>
    </div>
    <div className='App2'>
      <Dishes item={mealData}/>
    </div>
    </CartContextProvider>
   
  )
}

export default App;
