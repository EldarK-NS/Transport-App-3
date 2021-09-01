import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import { MyTheme } from '../layout/theme'

export default function InputDouble({ inputFrom, inputTo, setInputFrom, setInputTo, label }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder='от' style={styles.input} onChangeText={setInputFrom} value={inputFrom} keyboardType="number-pad" />
                <TextInput placeholder='до' style={styles.input} onChangeText={setInputTo} value={inputTo} keyboardType="number-pad" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 21,
        marginBottom: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    label: {
        // fontFamily: 'IBM-Regular',
        fontSize: 13,
        lineHeight: 16,
        color: MyTheme.grey,
        marginLeft: 10,
        marginBottom: 5
    },
    input: {
        width: '50%',
        height: 45,
        padding: 10,
        borderWidth: 0.5,
        borderColor: MyTheme.grey,
    }
})
