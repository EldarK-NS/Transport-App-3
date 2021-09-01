import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { MyTheme } from '../layout/theme';

export default function PriceBlock({ title, subtitle, button }) {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.icon}>
                    <Text style={styles.iconText}>&#8376;</Text>
                </View>
                <View>
                    <View style={styles.context}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subtitle}</Text>
                    </View>
                    <View style={styles.footerButtonContainer}>
                        <TouchableOpacity style={styles.footerButton}>
                            <Text style={styles.buttonText}>{button}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        borderBottomColor: MyTheme.grey,
        borderBottomWidth: 0.5,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'flex-start',//!baseline crashed ios
        marginVertical: 10
    },
    icon: {
        marginRight: 23
    },
    title: {
        // fontFamily: 'IBM-Medium',
        fontSize: 15,
        lineHeight: 24,
        color: MyTheme.black
    },
    subTitle: {
        // fontFamily: 'IBM-Regular',
        fontSize: 14,
        lineHeight: 16,
        color: MyTheme.grey,
        width: 280
    },
    context: {
        marginBottom: 10
    },
    footerButton: {
        width: 210,
        height: 40,
        borderWidth: 1,
        borderColor: MyTheme.blue,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        // fontFamily: 'IBM-Medium',
        fontSize: 15,
        lineHeight: 24,
        color: MyTheme.blue,
    },
    icon: {
        marginRight: 28,
        borderColor: MyTheme.blue,
        borderRadius: 10,
        borderWidth: 2,
        width: 19,
        height: 19,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    iconText: {
        color: MyTheme.blue,
        // fontFamily: 'IBM-Bold',
        fontSize: 11,
    },
})

