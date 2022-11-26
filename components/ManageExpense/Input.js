import { View, Text, TextInput } from 'react-native';

/** Holds the label for the Input  */
function Input({label, textInputConfig}){
    return <View>
        <Text>{label}</Text>
        <TextInput {...textInputConfig} />
    </View>
}

export default Input;