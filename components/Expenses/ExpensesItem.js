import React from "react"
import {Pressable, StyleSheet, Text,View} from "react-native"
import { GlobalStyles } from "../../constants/styles"
import { getFormattedDate } from "../../util/date"
import { useNavigation } from "@react-navigation/native"


const ExpensesItem=({description,amount,date,id})=>{
    const navigation=useNavigation();

    const expensePressHandler=()=>{
        navigation.navigate("ManageExpenses",{
            expenseId:id,
            expenseDate:date,
            expenseAmount:amount,
            expenseDescription:description
        })
    }

    return(
        <Pressable onPress={expensePressHandler} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.expenseItem}>
                <View style={[styles.textBase,styles.description]}>
                    <Text style={[styles.description,styles.textBase]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>₹ {amount}</Text>
                </View>
            </View>
        </Pressable>   
    )
}
const styles=StyleSheet.create({
    expenseItem:{
        backgroundColor:GlobalStyles.colors.primary500,
        padding:12,
        marginVertical:8,
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4
    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:"bold",
    },
    amountContainer:{
        paddingHorizontal:20,
        paddingVertical:4,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:"bold"
    },
    pressed:{
        opacity:0.75
    }
})

export default ExpensesItem