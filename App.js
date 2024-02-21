import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import Buttonicon from './util/Buttonicon';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = ({navigation}) => {
  return (
    <>
        <BottomTabs.Navigator screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:"white",
          tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
          tabBarActiveTintColor:GlobalStyles.colors.accent500,
          headerTitleAlign:"center",
          headerRight:({tintColor})=> <Buttonicon name="plus" size={30} color={tintColor} onPress={()=>navigation.navigate("ManageExpenses")}/>
          
        }}>
          <BottomTabs.Screen
            name="AllExpenses"
            component={AllExpenses}
            options={{
              headerTitle:"All Expenses",
              tabBarLabel:"All",
              tabBarIcon:({color,size})=>
                <EvilIcons name="comment" size={30}/>
            }}></BottomTabs.Screen>
          <BottomTabs.Screen
            name="Recent Expenses"
            options={{
              tabBarIcon:()=><EvilIcons name="cart" size={30}/>,
              tabBarLabel:"Recent"
            }}
            component={RecentExpenses}></BottomTabs.Screen>
        </BottomTabs.Navigator>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle={'default'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:"white",
          headerTitleAlign:"center"
        }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen
            name="ManageExpenses"
            options={{title:"Manage Expense",presentation:"modal"}}
            component={ManageExpenses}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
