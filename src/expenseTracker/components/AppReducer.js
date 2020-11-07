export default (state, action) =>{
    switch (action.type) {
        case "DELETE_LIST":
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            }
        case "ADD_LIST":
            return {
                ...state,
                list: [action.payload, ...state.list]
            }
            default: return state;
    }
}