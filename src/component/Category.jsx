import React from "react";

const Category = (props) => {
    const { category } = props;

    return (
        <li>
            <span>Category: </span>{category}
        </li>
    )


}
export default Category;
