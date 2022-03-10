import React, { useContext } from "react";
import { LatestExpenseEntryContext } from "../Context/context";

const Date = () => {
    const [latestExpenseEntry] = useContext(LatestExpenseEntryContext);
    const { date } = latestExpenseEntry;

    return (
         <li>
            <span>Date: </span> {date}
        </li>
    )
}

export default Date;