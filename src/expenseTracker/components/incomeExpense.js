import React, {useContext} from 'react';
import {GlobalContext} from './Store';
import "../css/incomeExpense.css"

export const IncomeExpense =()=>{
    const {list} = useContext(GlobalContext);

    const totalAmount =list.map(listAmount => listAmount.Amount);
    // income
  const income = totalAmount.filter(item => item >  0).reduce((item1, item2)=> (item1 += item2), 0).toFixed(2); 
  // expense
  const expense = (totalAmount.filter(item => item <  0).reduce((item1, item2)=> (item1 += item2), 0) * -1).toFixed(2); 

    return(
<div className="dashBoard">
<label id="counter1" className="shadow-lg p-3 mb-5 bg-white rounded">
    
    <label className="headName">INCOME</label><br />
    <label className="amount">{income}$</label>

</label>

<label id="counter2" className="shadow-lg p-3 mb-5 bg-white rounded">

    <label className="headName">EXPENSE</label><br />
    <label className="amount">{expense}$</label>
   
</label>
</div>
  )
  };

