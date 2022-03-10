import React, { useState, useEffect } from "react";
import "../styles/app.css";

const ExpenseItem = () => {
    return (
        <>
            <li>
                <span>Price: </span>${item.amount}
            </li>
            <li>
                <span>Vendor: </span> {item.vendor}{" "}
            </li>
            <li>
                <span>Category: </span> {item.category}{" "}
            </li>
            <li>
                <span>Date: </span> {item.date}{" "}
            </li>
            <button

                className="remove"
                onClick={() => {
                    deleteClick(item.id);
                }}
            >
                {" "}
                Remove Expense
            </button>
        </>

    )
}
export default ExpenseItem;