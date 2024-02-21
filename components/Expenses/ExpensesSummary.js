import {StyleSheet, Text,View} from "react-native"
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary=({expenses,period})=>{
    const expenseSum= expenses.reduce((sum,expense)=>{
        return sum+expense.amount;
    },0)
    console.log(expenseSum)
    return(
        <View style={styles.conatiner}>
            <Text style={styles.period}>{period}</Text>
            <Text style={styles.sum}>₹ {expenseSum}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    conatiner:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:GlobalStyles.colors.primary50,
        padding:8,
        borderRadius:6,
        alignItems:"center",
        marginBottom:4
    },
    period:{
        fontSize:15,
        color:GlobalStyles.colors.primary400,
        fontWeight:"bold"
    },
    sum:{
        fontSize:16,
        fontWeight:"bold",
        color:GlobalStyles.colors.primary500
    }
})

export default ExpensesSummary