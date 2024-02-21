import { ADD_TO_CART } from "./constants";
import { DELETE_TO_CART } from "./constants";
import { UPDATE_TO_CART } from "./constants";

export const addtocart=(item)=>{
    return {
        type:ADD_TO_CART,
        data:item
    }
}

export const deletetocart=(item)=>{
    return{
        type:DELETE_TO_CART,
        id:item.id
    }
}

export const updatetocart=(item)=>{
    return{
        type:UPDATE_TO_CART,
        payload:{
            data:item,
            id:item.id
        }
    }
}
