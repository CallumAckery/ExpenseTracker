import { createContext, useReducer  } from "react";

const DUMMY_EXP = [
    {
        id: 'e1',
        description: 'A piar of boots',
        amount: 59.99,
        date: new Date('2022-09-25'),
    },
    {
        id: 'e2',
        description: 'Trousers',
        amount: 89.24,
        date: new Date('2022-09-23'),
    },{
        id: 'e3',
        description: 'Some Apples',
        amount: 5.99,
        date: new Date('2022-09-24'),
    },
    {
        id: 'e4',
        description: 'A piar of boots',
        amount: 59.99,
        date: new Date('2022-09-25'),
    },
    {
        id: 'e5',
        description: 'Trousers',
        amount: 89.24,
        date: new Date('2022-09-23'),
    },{
        id: 'e6',
        description: 'Some Apples',
        amount: 5.99,
        date: new Date('2022-09-24'),
    },
    {
        id: 'e7',
        description: 'A piar of boots',
        amount: 59.99,
        date: new Date('2022-09-25'),
    },
    {
        id: 'e8',
        description: 'Trousers',
        amount: 89.24,
        date: new Date('2022-09-23'),
    },
    {
        id: 'e9',
        description: 'Some Apples',
        amount: 5.99,
        date: new Date('2022-09-24'),
    },
]

export const ExpensesContext = createContext({
    expense: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random.toString();
            return [{...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updateableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updateableExpense = state[updateableExpenseIndex];
            const updatedItem = {...updateExpense, ...action.data.data};
            const updatedExpenses = [...state];
            updatedExpenses[updateableExpenseIndex] = updatedItem;
            return updateableExpense;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.data)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}){
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXP);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', data: expenseData });
    }

    function updateExpense(id){
        dispatch({ type: 'DELETE', data: id });
    }

    function updateExpense(id, expenseData){
        dispatch({ type: 'DELETE', data: { id: id, data: expenseData } });
    }

    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}
 

export default ExpensesContextProvider;