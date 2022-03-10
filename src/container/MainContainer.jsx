import React from "react";
import InputContainer from "./container/InputContainer";
import ExpenseContainer from "./container/ExpenseContainer";

const MainContainer = () => {
    //created state to hold database
    const [database, setDatabase] = useState([]);
    //created state to hold net price of expense extries
    const [currentBalance, setBalance] = useState(0);
    // created state to hold index of database extries
    const [currentIndex, setIndex] = useState(1);

    // upon rendering, sets state to current database
    useEffect(() => {
        fetch("/api/get")
            .then((response) => response.json())
            .then((data) => setDatabase(data));
    }, []);

    // //upon rending, sets currentBalance state to current database net price                                                                                                                               
    useEffect(() => {
        fetch("/api/getBalance")
            .then((response) => response.json())
            .then((data) => setBalance(data));
    }, []);

    // //upon rending, sets currentIndex to index of last entry of database
    useEffect(() => {
        fetch("/api/index")
            .then((response) => response.json())
            .then((data) => setIndex(data + 1));
    }, []);

    //upon click, submits post requested, updated database with current extry.  Also updates current states with new information
    function submitClick() {
        const index = currentIndex;
        incrementIndex();
        const vendor = document.getElementById("Vendor").value;
        const amount = document.getElementById("Amount").value;
        const category = document.getElementById("Category").value;
        const date = document.getElementById("Date").value;
        console.log(date);
        const postOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: index,
                amount: amount,
                vendor: vendor,
                category: category,
                date: date,
            }),
        };
        fetch("/api/expenses", postOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log('data from adding an expense ', data)
                addBalance(data.amount);
                return addItem(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function deleteClick(buttonIndex) {
        console.log("button index", buttonIndex);
        const id = buttonIndex;
        const deleteOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        fetch(`/api/${id}`, deleteOptions)
            .then((response) => response.json())
            .then((response) => {
                fetch("/api/get")
                    .then((response) => response.json())
                    .then((data) => setDatabase(data));
                fetch("/api/getBalance")
                    .then((response) => response.json())
                    .then((data) => setBalance(data));
                fetch("/api/index")
                    .then((response) => response.json())
                    .then((data) => setIndex(data));
            });
    }

    // adds new entry to current state
    function addItem(data) {
        setDatabase(database.concat(data));
    }

    // adds new expenses price to currentBalance state
    function addBalance(data) {
        setBalance(Number(currentBalance) + Number(data));
    }
    // increments index state by 1.  // for whoever is working on this, we are having issues with the index state when you are add and delete buttons on the front end.  sometimes the index state does not match the database id
    function incrementIndex() {
        setIndex(currentIndex + 1);
    }





    return (
        <div>
            <InputContainer />
            <ExpenseContainer />
        </div>
    );
};

export default MainContainer;
