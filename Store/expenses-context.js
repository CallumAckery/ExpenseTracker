import { createContext, useReducer  } from "react";

const DUMMY_EXP = [
    {
        id: 'e1',
        description: 'A piar of boots',
        amount: 59.99,
        date: new Date('2022-12-11'),
    },
    {
        id: 'e2',
        description: 'Trousers',
        amount: 89.24,
        date: new Date('2022-12-11'),
    },{
        id: 'e3',
        description: 'Some Apples',
        amount: 5.99,
        date: new Date('2022-12-11'),
    },
    {
        id: 'e4',
        description: 'Stuff',
        amount: 59.99,
        date: new Date('2022-12-11'),
    },
    {
        id: 'e5',
        description: 'Jeans',
        amount: 89.24,
        date: new Date('2022-12-11'),
    },{
        id: 'e6',
        description: 'Raspberryies',
        amount: 5.99,
        date: new Date('2022-12-11'),
    },
    {
        id: 'e7',
        description: 'Shrek Film',
        amount: 59.99,
        date: new Date('2022-12-11'),
    },
    {
        id: 'e8',
        description: 'Steam Game',
        amount: 89.24,
        date: new Date('2022-12-02'),
    },
    {
        id: 'e9',
        description: 'Tatties',
        amount: 5.99,
        date: new Date('2022-12-02'),
    },
]

export const ExpensesContext = createContext({
    expense: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        const id = new Date().toString() + Math.random().toString();
        return [{ ...action.payload, id: id }, ...state];
      case 'UPDATE':
        const updatableExpenseIndex = state.findIndex(
          (expense) => expense.id === action.payload.id
        );
        const updatableExpense = state[updatableExpenseIndex];
        const updatedItem = { ...updatableExpense, ...action.payload.data };
        const updatedExpenses = [...state];
        updatedExpenses[updatableExpenseIndex] = updatedItem;
        return updatedExpenses;
      case 'DELETE':
        return state.filter((expense) => expense.id !== action.payload);
      default:
        return state;
    }
  }
function ExpensesContextProvider({children}){
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXP);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', data: expenseData });
    }

    function deleteExpense(id){
        dispatch({ type: 'DELETE', data: id });
    }

    function updateExpense(id, expenseData){
        dispatch({ type: 'UPDATE', data: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>
}
 

export default ExpensesContextProvider;