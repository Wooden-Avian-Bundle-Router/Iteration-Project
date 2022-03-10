import React, { useContext } from "react";
import { LatestExpenseEntryContext } from "../Context/context";



const Category = () => {
    const [latestExpenseEntry] = useContext(LatestExpenseEntryContext);
    const { category } = latestExpenseEntry;

    return (
        <li>
            <span>Category: </span>${category}
        </li>
    )


}
export default Category;
