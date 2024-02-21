import React, {useState} from 'react';
import {StyleSheet, Text, View,Alert} from 'react-native';
import Input from './Input';
import Button from '../util/Button';
import Buttonicon from '../util/Buttonicon';
import { GlobalStyles } from '../constants/styles';
import { getFormattedDate } from '../util/date';

const ExpenseForm = ({submitButtonLabel, onSubmit, onCancel,isEditing,deleteExpenseHandler,editedExpence}) => {
  const [checkError,setCheckError]=useState()
  const [inputValues, setInputValues] = useState(
    {
      amount:editedExpence.Amount.toString(),
      date:editedExpence.Date,
      description:editedExpence.Description,
    },
  )

  const confirmHandler=()=>{
    const expenseData={
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description:inputValues.description,
    }

    // isEditing ? dispatch(updatetocart(editedExpence)) : dispatch(addtocart(editedExpence))
    const amountIsValid=!isNaN(expenseData.amount) && expenseData.amount>0;
    const dateIsValid= expenseData.date.toString()!=="Invalid Date";
    const descIsValid=expenseData.description.trim().length>0;

    if(!amountIsValid || !dateIsValid || !descIsValid){
      Alert.alert(
        "Invalid",
        "Please Check Your Input Values",
      )
      return;
    }
  }

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
   setInputValues(prev => {
    return {
      ...prev,
      [inputIdentifier]: enteredValue
    };
  });
}

  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Your Expense</Text>
      <View style={styles.amountAndDate}>
        <Input
          style={styles.rowinput}
          label="Amount (In Rupees - ₹)"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            value:inputValues.amount,
            onChangeText: (text) =>inputChangedHandler("amount",text),
          }}
        />
        <Input
          style={styles.rowinput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: inputValues.date,
            onChangeText: text => inputChangedHandler("date", text),
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          value: inputValues.description,
          onChangeText: text =>
            inputChangedHandler("description", text),
        }}
      />
      <View style={styles.buttonContainer}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {submitButtonLabel}
        </Button>
      </View>
      {isEditing && (
          <View style={styles.deleteContainer}>
            <Buttonicon
              name="trash"
              color={GlobalStyles.colors.error500}
              size={30}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
    </View>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    marginTop: 50,
    marginHorizontal: 10,
    flex:1
  },
  amountAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  rowinput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer:{
    backgroundColor:"#db3c39",
    marginTop:15,
    alignSelf:"flex-end",
    borderRadius:15
  },
});
export default ExpenseForm;
