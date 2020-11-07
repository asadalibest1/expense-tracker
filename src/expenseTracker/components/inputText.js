import React, {useState, useContext} from 'react';
import {GlobalContext} from './Store';


export const InputText =()=> {
  
    const [text, setText] = useState('');
    const [Amount, setAmount] = useState('');

    const {addList} = useContext(GlobalContext);
    
let submit = e =>{
    e.preventDefault();
    
    const newTrans ={
        id: Math.floor(Math.random()* 100000000),
        text,
        Amount: parseInt(Amount)
    }
    addList(newTrans);
}
    return(
            <form onSubmit={submit}>
            <div className="form-label-group">
          <input type="text" id="inputText" className="form-control" value={text} onChange={e => setText(e.target.value)} placeholder="Text"/>
          <label htmlFor="inputText">Text</label>
          </div>
      
      <div className="form-label-group">
      <input type="number" id="inputAmount" className="form-control" value={Amount} onChange={e => setAmount(e.target.value)} placeholder="Amount - use - sign for expense"/>
      <label htmlFor="inputAmount">Amount / use - sign for expense</label>
      </div>

      <p className="my-4">
        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add Transaction</button>
        
        {/* <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i>Sign in with Google</button>
        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i>Sign in with Facebook</button> */}
        </p>
        </form>
        )
}
                