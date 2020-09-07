import React, { useContext } from 'react';

// IMPORT GLOBAL CONTEXT //
import {GlobalContext } from '../context/GlobalState'

// IMPORT TRANSACTION
import {Transaction} from './Transaction'

export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext)

 
    return (
        <div className = "transaction-container" >
        <h4 className = "heading">Transaction History</h4>
        <ul className = "list"> 
            {transactions.map(transaction => (

            <Transaction key = {transaction.id} transaction = {transaction}/>
            )
            )}
            

        </ul>
        </div>
    );
}

export default TransactionHistory;

