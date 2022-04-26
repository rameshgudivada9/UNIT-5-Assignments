import { legacy_createStore as createStore} from "redux"; 



const reducer=(store,action)=>{

    switch(action.type){

        case "ADD_COUNT": 
        return {...store,counter:store.counter+action.payload};

        case "ADD_TODO":  
        return {...store, todos:[...store.todos,action.payload]};

         default: 
         return store


    }
    
    // if(action.type==="ADD_COUNT"){
    //     return {...store,counter:store.counter+action.payload}
    // }
    // else if(action.type==="ADD_TODO"){
    //     return {...store, todos:[...store.todos,action.payload]
    //     }
    // }
    // return store;
    
}

const initState={
    counter:0,
    todos:[],
}



const store=createStore(reducer,initState)

console.log(store.getState())

store.dispatch({type:"ADD_COUNT",payload:1})

store.dispatch({type:"ADD_TODO",payload:{title:"learn redux",status:false}})

store.dispatch({type:"ADD_TODO",payload:{title:"learn typescript",status:false}})



console.log(store.getState())
