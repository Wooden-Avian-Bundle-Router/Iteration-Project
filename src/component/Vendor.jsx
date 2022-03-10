import React, { useContext } from "react";
import { LatestExpenseEntryContext } from "../Context/context";



const Vendor = () => {
    const [latestExpenseEntry] = useContext(LatestExpenseEntryContext);
    const { vendor } = latestExpenseEntry;

    return (
         <li>
            <span>Vendor: </span> {vendor}
        </li>
    )
}

export default Vendor;