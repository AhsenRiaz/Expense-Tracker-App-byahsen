import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// CREATE INITIAL STATE //
 
const initialState = {
     transactions:[
    {id:1, description:"Income1",   transactionAmount:1000},
    {id:2, description:"Expense1" , transactionAmount:-100},
    {id:3, description:"Income2",   transactionAmount:2000},
    {id:4, description:"Expense2" , transactionAmount:-500},

]
}

// CREATE GLOBAL CONTEXT
export const GlobalContext = createContext(initialState);

// CREATE GLOBAL PROVIDER

export const GlobalProvider = ({children}) =>{

        const [state] = useReducer(AppReducer,initialState)

    return (
        <GlobalContext.Provider value={
            {
                transactions : state.transactions
            }
        }>
            {children}

        </GlobalContext.Provider>
    )
}

