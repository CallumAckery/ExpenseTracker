import { Text, View, StyleSheet } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../Store/expenses-context';

function ManageExpense({route, navigation}){
    const expensesCtx = useContext(ExpensesContext)


    const editedExspenseId = route.params?.expenseId;
    const isEditing = !!editedExspenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);


    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(editedExspenseId);
        navigation.goBack();
    }

    function cancelHandler() {

        navigation.goBack();
    }

    function confirmHandler() {
        debugger;
        if(isEditing){
            expensesCtx.updateExpense(
                editedExspenseId,
                {
                description: 'Sausage Roll',
                amount: 1.99,
                date: new Date('10/10/2022'),
            });
        }else{
            expensesCtx.addExpense({
                description: 'Toilet Roll',
                amount: 20.00,
                date: new Date('10/10/2022'),
            });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>

            {isEditing && (    
            <View style={styles.deleteContainer}>
                <IconButton 
                    icon="trash" 
                    color={GlobalStyles.colors.error500} 
                    size={36} 
                    onPress={deleteExpenseHandler} 
                    />
            </View>
            )}
        </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24, 
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    }
});