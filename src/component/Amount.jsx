import React from "react";

const Amount = (props) => {

    // console.log('the value of BalanceContext in InputContainer is: ', BalanceContext);
    // console.log('this is the value of latestExpenseEntry in Amount.jsx: ', latestExpense)
    // const  amount  = props.amount;
    const { amount } = props;
    // console.log('props: ',props);
    // console.log('amount: ',amount);
    
    return (
        <li>
            <span>Price: </span>${amount}
        </li>
    )
}

export default Amount;