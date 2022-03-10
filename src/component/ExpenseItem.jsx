import React from "react";
import Amount from "./Amount"
import Vendor from "./Vendor"
import Category from "./Category"
import Date from "./Date"
import DeleteBtn from "./DeleteBtn"

// import "../styles/app.css";

const ExpenseItem = () => {
    return (
        <>
            <Amount />
            <Vendor />
            <Category />
            <Date />
            <DeleteBtn />
        </>
    );
}
export default ExpenseItem;