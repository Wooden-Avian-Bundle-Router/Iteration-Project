import React, { useState, useEffect } from "react";
import "../styles/app.css";

const InputContainer = () => {

    return (
        <div className="inputContainer">
            <div className="box">
                <h1>Expenses</h1>
            </div>
            <div className="addExpense">
                <input
                    type="amount"
                    name="Amount"
                    id="Amount"
                    placeholder="Enter Cost"
                ></input>
                <input type="vendor" id="Vendor" placeholder="Vendor"></input>
                <input
                    type="category"
                    id="Category"
                    placeholder="Category"
                ></input>
                <input type="date" id="Date"></input>
                <div className="btnContainer">
                    <button className="submit" onClick={submitClick}>
                        {" "}
                        Submit
                    </button>
                </div>
            </div>
            <div className="balance">
                <h2>Balance: $ {currentBalance}</h2>
            </div>
        </div>
    )
}

export default InputContainer;
