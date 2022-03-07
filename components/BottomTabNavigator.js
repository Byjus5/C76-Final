import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transacción" component={TransactionScreen} />
          <Tab.Screen name="Buscar" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
