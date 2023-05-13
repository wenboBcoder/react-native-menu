import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import {combineReducers,createStore} from 'redux'
import {Provider} from 'react-redux'

import mealsReducers from "./Store/reducers/meals";

const store=createStore(combineReducers({meals:mealsReducers}))
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";


import MealsNavigator from "./navigation/MealsNavigator";
import FiltersScreen from "./Screen/FiltersScreen";

const Drawer = createDrawerNavigator();
const FiltersScreenOption=props=>({
  headerTitle:'Filter Meals',
  headerRight: () => (
    <View>
        <Feather name="save" size={24} color="black"  onPress={()=>console.log('save',props.navigation.getState().routes[1].params.save)}/>
    </View>
    ),
})
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MealsNavigator" useLegacyImplementation={true} >
          <Drawer.Screen name="MealsNavigator" component={MealsNavigator} />        
          <Drawer.Screen name="FiltersScreen" component={FiltersScreen} options={FiltersScreenOption}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>

)}

