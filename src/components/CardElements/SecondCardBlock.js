import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyTheme } from '../layout/theme';

// ! Mаленький отступ иконок в право на 2px!!!!!

export default function SecondCardBlock({ firstRowTitle, firstRowSubtitle, secondRowTitle, secondRowSubtitle, thirdRowTitle }) {
    return (
        <View style={styles.secondBlockContainer}>
            <View style={styles.sb_Row}>
                <MaterialCommunityIcons name={"package-variant-closed"} size={24} color={MyTheme.blue} style={styles.sb_Icon} />
                <View style={styles.sb_Context}>
                    <Text style={styles.sb_Title}>{firstRowTitle}</Text>
                    <Text style={styles.sb_SubTitle}>{firstRowSubtitle}</Text>
                </View>
            </View>
            <View style={styles.sb_Row}>
                <MaterialCommunityIcons name={"truck-outline"} size={24} color={MyTheme.blue} style={styles.sb_Icon} />
                <View style={styles.sb_Context}>
                    <Text style={styles.sb_Title}>{secondRowTitle}</Text>
                    <Text style={styles.sb_SubTitle}>{secondRowSubtitle}</Text>
                </View>
            </View>
            <View style={styles.sb_Row}>
                <MaterialCommunityIcons name={"file-outline"} size={24} color={MyTheme.blue} style={styles.sb_Icon} />
                <View style={styles.sb_Context}>
                    <Text style={[styles.sb_SubTitle, { color: MyTheme.black }]} numberOfLines={3} ellipsizeMode={'tail'}>{thirdRowTitle}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    secondBlockContainer: {
        width: Dimensions.get('window').width - 30,
        borderBottomColor: MyTheme.grey,
        borderBottomWidth: 0.5,
    },
    sb_Row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 10
    },
    sb_Icon: {
        marginRight: 23
    },
    sb_Title: {
        // fontFamily: 'IBM-Medium',
        fontSize: 15,
        lineHeight: 24,
        color: MyTheme.black
    },
    sb_SubTitle: {
        // fontFamily: 'IBM-Regular',
        fontSize: 14,
        lineHeight: 16,
        color: MyTheme.grey,
        width: 280
    },
})
