import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../Store/expenses-context';

function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext)

    return (
        <ExpensesOutput expenses={expensesCtx} expensesPeriod="Total" />
    )
}

export default AllExpenses;