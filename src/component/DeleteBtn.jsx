import React, { useContext } from "react";
import { DeleteClickContext } from "../Context/context";

const DeleteBtn = () => {
    const [latestExpenseEntry] = useContext(LatestExpenseEntryContext);
    const [deleteClick] = useContext(DeleteClickContext);

    const { id } = latestExpenseEntry;

    return (
        <div>
          <button className="remove" onClick={() => {deleteClick(id);}}>{" "}Remove Expense</button>
        </div>
    )
}

export default DeleteBtn;
