import { View, StyleSheet  } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';


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
]



function ExpensesOutput({expenses, expensesPeriod}){
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXP} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXP} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({

    container: {
        padding: 24, 
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,

    }

});