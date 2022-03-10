import React from "react";

const Date = (props) => {
    const { date } = props;

    return (
         <li>
            <span>Date: </span> {date}
        </li>
    )
}

export default Date;