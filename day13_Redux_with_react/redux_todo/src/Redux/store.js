

import { legacy_createStore as createStore } from "redux";
import { reducerCounter } from "./reducer";

export const store=createStore(reducerCounter,{todos:[]});