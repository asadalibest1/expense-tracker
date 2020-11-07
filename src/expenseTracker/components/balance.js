import React, {useContext} from 'react';
import "../css/balance.css"
import Recent from "./Recent.js"
import {GlobalContext} from './Store';
import recentLogo from "../images/recent.jpg";

export const Balance =()=>{
    const [toggle, setToggle] = React.useState(false);
    const {list} = useContext(GlobalContext);

    // Total: 
    const totalAmount =list.map(listAmount => listAmount.Amount);

    const reducer = totalAmount.reduce((item1, item2)=> (item1 += item2), 0).toFixed(2);
    // alert(reducer);

    function Toggle(e){
    e.preventDefault(0);
    if(toggle === false){
            document.getElementsByClassName("Recent")[0].style.display = "initial";
            document.getElementsByClassName("components")[0].style.display = "none";

    }else{
        document.getElementsByClassName("Recent")[0].style.display = "none";
        document.getElementsByClassName("components")[0].style.display = "initial";
    }
    setToggle(!toggle);

}
    return(
        <>
              <div className="header">
            <span className="heading5">YOUR BALANCE</span>
            <span className="totalAmount">{reducer} $</span>
            <div className="recentButton">
            <img src={recentLogo} className="toggleButton" alt="recent-logo" onClick={Toggle} />
            </div>
            <div className="Recent">
            <Recent/>
            </div>
            </div>
        </>
    )
}
