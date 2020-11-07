import React from 'react';
import '../css/ListBtn.css'
import "../css/Recent.css";

import {GlobalContext} from './Store';

export default function Recent() {
    const {list, deleteList} = React.useContext(GlobalContext);
    
    let num = 0;
    const sign = list.Amount < 0 ? "-" : "+";

    return(
            <>
   <div className="RecentDiv">
   <ul className="list-group list-group-flush">
{list.map((li)=>{
        //     console.log(li.text);
   return   <li className="list-group-item" key={li.id}>{num = num+1}) {li.text}
                <span className="recentAmount">
                {sign + Math.abs(li.Amount)} $
                </span>
                <span className="close recentClose" onClick={()=>{deleteList(li.id)}}>
                        x
                </span>
                </li>
})}
  </ul>
    </div>
   
        <div className="contacts">
                <img src={require("../images/fb.png")} onClick={()=>{window.open("https://www.facebook.com/asadali.asad.355")}} alt="fb" />
                <img src={require("../images/github.png")} onClick={()=>{window.open("https://github.com/asadalibest1")}} alt="github" />
                <img src={require("../images/linkedin.png")} onClick={()=>{window.open("https://www.linkedin.com/in/asad-ali-14bab11b2/")}} alt="linkedin" />
            </div>

         </>
        )
};