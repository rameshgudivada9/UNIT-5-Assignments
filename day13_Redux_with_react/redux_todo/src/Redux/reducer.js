
import {ADD_TODO} from './action'

export const reducerCounter=(store,{type,payload})=>{

    switch(type){
        case ADD_TODO:
            return {...store,todos:[...store.todos,payload]}

        default:
            return store;
    }


}