import React, {useContext} from 'react';
import {GlobalContext} from './Store';
import '../css/ListBtn.css'
import '../css/listItem.css'


export const ListItem =({lists})=> {
    const {deleteList} = useContext(GlobalContext);

    const sign = lists.Amount < 0 ? "-" : "+";

    return(
        <>
        <li class="list-group-item">
        {lists.text}
        <span className="Rupees">
        {sign + Math.abs(lists.Amount)} $
        </span>
        <span class="close" onClick={() => deleteList(lists.id)}>
        X
        </span>
        </li>
        
        </>
    )
}
