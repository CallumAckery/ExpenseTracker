import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../Store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses(){
        const expensesCtx = useContext(ExpensesContext);

        useEffect(() => {
                async function getExpenses(){
                        const expenses = await fetchExpenses();
           }
           getExpenses();
        }, []);

        const recentExpenses = expensesCtx.expenses.filter((expense) => {
                const today = new Date();
                const date7Days = getDateMinusDays(today, 7);
                return (expense.date > date7Days) && (expense.date <= today);
        });

        return (
                <ExpensesOutput 
                        expenses={recentExpenses} 
                        expensesPeriod="Last 7 Days" 
                        />
        );
}

export default RecentExpenses;