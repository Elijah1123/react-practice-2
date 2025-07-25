import React, {useState} from "react";

function AddExpenseForm({onAddExpense}) {
    const [name, seName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
}

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (!name || !description || !amount || !category) return;
        onAddExpense

    }