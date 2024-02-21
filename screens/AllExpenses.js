import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import {Text,View} from "react-native"
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const AllExpenses=()=>{
    const Stack=createNativeStackNavigator();
    return(
        <ExpensesOutput expensesPeriod="Total" />
    )
}
export default AllExpenses