import React, {useState} from "react";

function AddExpenseForm({onAddExpense}) {
    const [name, seName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !amount || !category) return;
    onAddExpense({name, description, amount: parseFloat(amount), category});
    setName ("");
    setDescription("");
    setAmount("");
    setCategory("");
    };

    return(
        <form onSubmit={handleSubmit}   className="form" >
            <input type="text" placeholder="Expense Name" value={name} onChange={(e) => setName(e.target.value)  }  />
            <input type="text " placeholder="Description" value={description} onChange={(e) => setDescription (e.target.value) }/>
            <input  type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount (e.target.value)  }   />
            <input  type="category" placeholder="Category" value={category} onChange={(e) => setCategory (e.target.value)}  />
            <button type="submit">Add Expense</button>

        </form>
    );
    }