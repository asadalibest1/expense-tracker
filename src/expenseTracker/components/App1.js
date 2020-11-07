import React from 'react';

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../css/App1.css"

import {GlobalProvider} from './Store';
import Lists from './List.js';
import {Balance} from './balance';
import {IncomeExpense} from './incomeExpense';
import {InputText} from './inputText';

export default function App1(){
    return(
      <>
        <div className="container">
              <h5 className="card-title text-center">Expense Tracker</h5>
              

              <form className="form-signin">                

        
                  <GlobalProvider>
                      <Balance /><br />
    <div className="components">
                      <IncomeExpense />
                      <Lists />
                      <InputText />
                  </div>
                  </GlobalProvider>
                          

              </form>
    </div>
</>    )
}