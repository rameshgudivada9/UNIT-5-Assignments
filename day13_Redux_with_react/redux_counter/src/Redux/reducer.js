import {ADD_COUNT} from './action'

export const reducerCounter=(store,{type,payload})=>{

    switch(type){
        case ADD_COUNT:
            return {...store,counter:store.counter+payload}

        default:
            return store;
    }


}