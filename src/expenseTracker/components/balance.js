import React, {useContext} from 'react';
import "../css/balance.css"

import {GlobalContext} from './Store';

export const Balance =()=>{
    const {list} = useContext(GlobalContext);

    // Total: 
    const totalAmount =list.map(listAmount => listAmount.Amount);

    const reducer = totalAmount.reduce((item1, item2)=> (item1 += item2), 0).toFixed(2);
    // console.log(reducer);
    return(
        <>
              <div className="header">
            <span className="heading5">YOUR BALANCE</span>
            <span className="totalAmount">{reducer}</span>
            </div>
        </>
    )
}
