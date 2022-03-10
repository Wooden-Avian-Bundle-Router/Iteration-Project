import React, { useState, useEffect } from "react";
import ExpenseItem from "./component/ExpenseItem";
import "../styles/app.css";

const ExpenseContainer = () => { 
    // <div className="cards">
    //     {database.map((item, i) => (
    //         <div className="innerCard" id={item.id} key={`ITEM${i}`}>
    //             <ul></ul>
    //             //
    const expenseItems = database.map((item, i) => {
        <ExpenseItem />
    })

    return(
        {expenseItems}
    )
}

export default ExpenseContainer;