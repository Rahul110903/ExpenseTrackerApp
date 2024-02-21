import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import {ExpensesList} from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';
import {useSelector} from "react-redux"

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 1000,
      date: new Date('2021-12-19'),
    },
    {
      id: 'e2',
      description: 'A pair of slippers',
      amount: 2003,
      date: new Date('2023-12-25'),
    },
    {
      id: 'e3',
      description: 'A pair of shirts',
      amount: 4000,
      date: new Date('2022-11-24'),
    },
    {
      id: 'e4',
      description: 'A pair of samosaa',
      amount: 4982,
      date: new Date('2000-09-11'),
    },
    {
      id: 'e5',
      description: 'A pair of kurtas',
      amount: 8000,
      date: new Date('2010-06-20'),
    },
    {
        id: 'e6',
        description: 'A pair of pants',
        amount: 4030,
        date: new Date('2002-11-25'),
      },
      {
        id: 'e7',
        description: 'A pair of anime books',
        amount: 4502,
        date: new Date('2012-01-23'),
      },
      {
        id: 'e8',
        description: 'A pair of games',
        amount: 4835,
        date: new Date('2020-11-30'),
      },
      {
        id: 'e9',
        description: 'A pair of good game',
        amount: 9633,
        date: new Date('2023-12-25'),
      },
      {
        id: 'e10',
        description: 'A pair of hahahah',
        amount: 8087,
        date: new Date('2021-12-19'),
      },
  ];

  const cartData=useSelector((state)=>state.reducer)
  
  console.warn(cartData)
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} period={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    }
})
export default ExpensesOutput;
