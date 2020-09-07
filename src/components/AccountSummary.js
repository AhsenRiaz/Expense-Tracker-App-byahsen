import React from 'react';

function AccountSummary(){
    return (
        <div className = "inc-exp-container">
        <div className = "box1">
           <h3 className = "inc-container">Income</h3>  
           <p className = "money-plus">$0.00</p>
        </div>

        <i className = "blocker">.</i>

        <div className = "exp-container">
            <h3>Expense</h3>
            <p className = "money-minus">$0.00</p>
        </div>
        </div>
    );
}

export default AccountSummary;