import ExpenseItem from './ExpenseItem';


function ExpensesGroup({expenses}) {
    return(
        <div className="expenses-group">
        {
            expenses.map((expense) => 
                <ExpenseItem id={expense.id} title={expense.title}
                amount={expense.amount} date={expense.date} />
            )
        }
        </div>
    );
}

export default ExpensesGroup;