import React,{useRef,useState} from 'react';
import classes from "./DishItemForm.module.css";
import Input from './Input';
const DishItemForm = (props) => {
  const totalAmountValue= useRef();
  const [validAmount,setValidAmount]=useState(true);
    const submitHandler=(event)=>{
        event.preventDefault();
        const enterdAmount = totalAmountValue.current.value;
        const enterdAmountNumber = +enterdAmount;
        if(enterdAmount.trim().length===0 || enterdAmountNumber<1 || enterdAmountNumber>5){
          setValidAmount(false);
          return
        }
       props.onAddToCart(enterdAmountNumber);
    }
  return (
<form className={classes.dishItemForm} onSubmit={submitHandler}>
    <Input label="Amount"
        ref={totalAmountValue}
        input={{
        id:'amount_',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
    <button className={classes.itemButton} type='submit'>+Add</button>  
    {!validAmount && <p>Enterd valid amount</p>}
</form>
  )
}

export default DishItemForm;