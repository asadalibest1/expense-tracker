import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer.js'

const iState ={
    list: []
}
// {id: '1', text: 'book', Amount: 350},
// {id: '2', text: 'book2', Amount: 350},



export const GlobalContext = createContext(iState);


export const GlobalProvider = ({  children}) =>{
    const [state, dispatch] = useReducer(AppReducer, iState);

function deleteList(id) {
        dispatch({
            type: "DELETE_LIST",
            payload: id
        });
    };
function addList(list) {
        dispatch({
            type: "ADD_LIST",
            payload: list
        });
    };
    
    return (<GlobalContext.Provider value={{
        list: state.list,
        deleteList,
        addList
    }}>
            {children}
    </GlobalContext.Provider>)
};







// const reducer = (state, action)=>{
    
// switch(action.type){
//         case "ADD_TEXT": return {List: [{text: action.payload, ...state}],}
//         // case "ADD_TEXT": return {...state, text: action.payload}
//         // case "ADD_AMOUNT": return {...state, Amount: action.payload}
//         default: return state;
//     }
// }

// export {iState};
// export {reducer};