import {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props =>{
  const[amountIsvalid, setAmountIsValid]=useState(true);
  const amountInputref = useRef();

  const submithandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputref.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };


    return (
      <form className={classes.form} onSubmit={submithandler}>
        <Input
        ref={amountInputref}
          label="Amount"
          input={{
            id: 'amount_' + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!amountIsvalid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    );
};

export default MealItemForm;