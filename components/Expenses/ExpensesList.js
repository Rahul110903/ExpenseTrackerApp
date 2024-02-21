import {FlatList} from 'react-native';
import {Text,View} from "react-native"
import ExpensesItem from './ExpensesItem';

export const ExpensesList = ({expenses}) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item)=>item.id}
      renderItem={element => (
        <ExpensesItem {...element.item}/>
      )}
    />
  );
};
