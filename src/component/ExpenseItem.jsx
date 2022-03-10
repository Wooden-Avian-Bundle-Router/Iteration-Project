import React from "react";
import Amount from "./Amount"
import Vendor from "./Vendor"
import Category from "./Category"
import Date from "./Date"
import DeleteBtn from "./DeleteBtn"

// import "../styles/app.css";

const ExpenseItem = (props) => {
    // console.log('this is the value of props in ExpenseItem: ', props);
    // console.log('this is the value of props.amount in ExpenseItem: ', props.amount);
    const { vendor, amount, date, category, id } = props.expenseItem;
    // console.log('props in ExpenseItem: ',props);
    // console.log('amount in ExpenseItem: ',amount);
    return (    
        <>
            <Amount amount={amount}/>
            <Vendor vendor={vendor}/>
            <Category category={category}/>
            <Date date={date}/>
            <DeleteBtn id={id} />
        </>
    );
}
export default ExpenseItem;