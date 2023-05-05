import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";


function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
          ...enteredExpenseDate,
          id: Math.random().toString(),
        };
        
        props.onAddExpense(expenseData);
        stopEdittingHandler();
    };

    const [isEditting, setIsEditting] = useState(false);

    const startEditingHandler = () => {
        setIsEditting(true);
    };
  
    const stopEdittingHandler = () => {
        setIsEditting(false);
    };
  
    return (
        <div className="new-expense">
            {
                !isEditting && (
                    <button className="new-expense__button_no-margin" 
                    onClick={startEditingHandler}>Add New Expense</button>
                )
            }
            {
                isEditting && 
                (
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEdittingHandler}/>
                )
            }
        </div>
    );
}

export default NewExpense;