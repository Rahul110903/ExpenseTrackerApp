import React, {useLayoutEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Buttonicon from '../util/Buttonicon';
import {GlobalStyles} from '../constants/styles';
import Button from '../util/Button';
import ExpenseForm from '../ManageExpense/ExpenseForm';
import { getFormattedDate } from '../util/date';
import { addtocart, updatetocart } from '../redux/action';
import { useDispatch } from 'react-redux';



const ManageExpenses = ({route, navigation}) => {

  const editedExpence ={
    Id:route.params?.expenseId,
    Amount:!!(route.params?.expenseAmount)?route.params.expenseAmount:"",
    Date:!!(getFormattedDate(route.params?.expenseDate))?getFormattedDate(route.params.expenseDate):"",
    Description:!!(route.params?.expenseDescription)?route.params.expenseDescription:""
  };
  const isEditing = !!editedExpence.Id; // if the value is true then it give truly value....if the value is false then it gives the falsy value...(like boolean)

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: isEditing ? 'Edit Expense' : 'Add Expense',
      },
      [navigation, isEditing],
    );
  });

  const deleteExpenseHandler = () => {
    navigation.goBack();
  };

  const cancelHandler=()=>{
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <ExpenseForm 
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        isEditing={isEditing}
        deleteExpenseHandler={deleteExpenseHandler}
        editedExpence={editedExpence}
      />
    </View>
  );
};

const styles=StyleSheet.create({
    mainContainer:{
      flex:1,
      backgroundColor:GlobalStyles.colors.primary700,
    },
})

export default ManageExpenses;
