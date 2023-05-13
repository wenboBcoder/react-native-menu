import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'

export default function FavouritesScreen(props) {
  const favMeals=useSelector(state=>state.meals.favoriteMeals)
  // const favMeals=availableMeals.filter(meal=>meal.id=='c1'||meal.id=='c2')
  console.log('favMeals',favMeals)
  return ( <MealList listData={favMeals} navigation={props.navigation}/> )
}
const styles=StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})