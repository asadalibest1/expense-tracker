import React from 'react';

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../css/App1.css"

import {GlobalProvider} from './Store';
import Lists from './List.js';
import {Balance} from './balance';
import {IncomeExpense} from './incomeExpense';
import {InputText} from './inputText';
import Credit from './credit.js';



export default function App1(){
  
    
    return(
      <>
        <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Expense Tracker</h5>
              

              <form className="form-signin">                

        
                  <GlobalProvider>
                      <Balance /><br />
                      <IncomeExpense />
                      <Lists />
                      <InputText />
                  </GlobalProvider>
                          

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
                <Credit />
</>    )
}