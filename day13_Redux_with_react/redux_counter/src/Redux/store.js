import { legacy_createStore as createStore } from "redux";
import { reducerCounter } from "./reducer";

export const store=createStore(reducerCounter,{counter:0});

// store.subscribe(()=>{
//   console.log(  store.getState());
// })
