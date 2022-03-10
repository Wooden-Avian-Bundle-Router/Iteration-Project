import React, { useContext } from "react";
import { DeleteClickContext } from "../Context/context";

const DeleteBtn = (props) => {
      
    const deleteClick = useContext(DeleteClickContext);

    // console.log('useContext(DeleteClickContext): ', useContext(DeleteClickContext));

    const { id } = props;

    return (
        <div>
          <button className="remove" onClick={() => {deleteClick(id);}}>{" "}Remove Expense</button>
        </div>
    )
}

export default DeleteBtn;
