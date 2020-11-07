import React, { useContext } from 'react';
import "../css/List.css";

import {ListItem} from './listItem';
import {GlobalContext} from './Store';

    export default function Lists(){
    const {list} = useContext(GlobalContext);
    // const {deleteList} = useContext(GlobalContext);

    // console.log(list[0].Amount);
    return(
        <>
         <div>
             <h6>History</h6>
             <hr />
             <ul className="list-group" id="ulList">
           {list.map(
               lists => <ListItem key={lists.id} lists={lists}/>
           )
           }
            
            </ul>
            <hr />

  </div>
        </>
        )
    }