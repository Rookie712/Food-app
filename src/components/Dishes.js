import React from 'react';
import classes from "./Dishes.module.css";
import DishItem from './DishItem';

const Dishes = (props) => {
  
  return (
    <div className={classes['main-all-dish']}>
      {
        props.item.map((data)=>(
            <DishItem  key={data.id} data={data}/>
        ))
      }  
    </div>
  )
}

export default Dishes;
