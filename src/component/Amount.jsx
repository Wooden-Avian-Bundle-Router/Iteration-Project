import React, { useContext } from "react";
import { LatestExpenseEntryContext } from "../Context/context";



const Amount = () => {
    const [latestExpenseEntry] = useContext(LatestExpenseEntryContext);
    const { amount } = latestExpenseEntry;
    
    return (
        <li>
            <span>Price: </span>${amount}
        </li>
    )
}

export default Amount;