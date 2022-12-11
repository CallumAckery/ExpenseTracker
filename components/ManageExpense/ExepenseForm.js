import { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'
import Input from './Input';


function ExpenseForm({submitButtonLabel ,onCancel, onSubmit}){
    //values for form submission
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    /** Function */
    function inputChangedHandler(inputIdentifier, enteredValue){
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler(){

    }

    return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
            <Input style={styles.rowInput} label="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangedHandler.bind(this, 'amount'),
                value: inputValues.amount,
            }}/>
            <Input 
                style={styles.rowInput} 
                label="Date" 
                textInputConfig={{
                    placeHolder: 'DD/MM/YYYY',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date,
            }} />
            </View>
            <Input 
                label="Description" 
                textInputConfig={{
                multiline: true,
                //autoCapitalize: 'none',
                //autoCorrect: falsea
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description,
            }}/>
           
            <View style={styles.buttons}>
                    <Button style={styles.button} mode="flat" onPress={onCancel}>
                        Cancel
                    </Button>
                    <Button style={styles.button} onPress={confirmHandler}>
                        {submitButtonLabel}
                    </Button>
            </View>
    </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form:{
        marginTop: 50,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput:{
        flex: 1,
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8,
    }
});