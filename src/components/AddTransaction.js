import React, {useState} from 'react';

function AddTransaction(){

    const [description, setDescription] = useState();
    const [amount, setAmount]           = useState()
 
    return (
        <div >
            <div className = "form-control">
            <h3 className = "text">Add New Transaction</h3>
            <label className = "descript" htmlFor = "description">
                Description
            </label>
            <input 
            id = "description" 
            placeholder = "Detail Of Transaction" 
            typeof = "nubmer"
            value = {description}
            onChange = {(e)=> setDescription(e.target.value)}

            type="text"
            required>

            </input>
            </div>

            <div className = "form-control">
            <label className = "transaction" htmlFor = "addtransaction" type = "text"  >
                 Transaction Amount
            </label>
            <input  
            id = "addtransaction" 
            placeholder = "Enter Transaction Amount"
            value = {amount}     
            onChange = {(e)=> setAmount(e.target.value)}      

            type="number"
            required>
            

            </input>
            </div>
            <button className = "btn">Add Transaction</button>

        </div>

      
    );
}

export default AddTransaction;