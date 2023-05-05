import Card from './Card';
import ExpensesGroup from './ExpensesGroup';
import BarGroup from './BarGroup';
import FilterExpense from './FilterExpense';
import React, {useState} from "react";


function Expenses({expenses}) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (date) => {
        setFilteredYear(date);
    };

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let years = expenses.map((expense) => expense.date.getFullYear());
    years = [...new Set(years)];

    return(
        <Card className="expenses">
            <FilterExpense years={years} selected={filteredYear} 
                onFilterChange={filterChangeHandler} />
            <BarGroup expenses={filteredExpenses} />
            <ExpensesGroup expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;