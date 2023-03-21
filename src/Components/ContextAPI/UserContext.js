import React,{Children, createContext,useReducer} from "react";
import reducer, { initialState } from "./UserReducer";

export const UserContext = createContext([initialState, () => initialState])

export const UserProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}