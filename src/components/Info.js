import React from 'react';
import classes from "./Info.module.css";

const Info = () => {
  return (
    <div>
        <div className={classes["main-info"]}>
            <h1>
                Delicious food, Deleiver To You
            </h1>
            <p>
                Choose your favorite meal from our broad selection of available meal and enjoy a delicious lunch at home.
            </p>
            <br/>
            <p>
                All our meals are cooked with high quality ingridients, just in time and of couse by high experienced chef.
            </p>
        </div>
    </div>
  )
}

export default Info
