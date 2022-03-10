import React from "react";

const Vendor = (props) => {
    const { vendor } = props;

    return (
         <li>
            <span>Vendor: </span> {vendor}
        </li>
    )
}

export default Vendor;