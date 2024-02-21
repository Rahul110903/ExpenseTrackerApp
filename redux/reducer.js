import { ADD_TO_CART, DELETE_TO_CART, UPDATE_TO_CART } from "./constants";

const initialState=[];
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case (ADD_TO_CART):
            return [
                ...state,
                action.data
            ]
        case (UPDATE_TO_CART):
            const updateExpenseIndex=state.findIndex((expense)=>expense.id===action.payload.id) 
            const updatableExpense= state[updateExpenseIndex]
            const updatedItem={...updatableExpense,...action.payload.data};
            const updatedExpenses=[...state]
            updatedExpenses[updateExpenseIndex] = updatedItem;
            return updatedExpenses;
        case (DELETE_TO_CART):
            return state.filter((expense)=>expense.id!==action.id)    
        default:
            return state
    }
}