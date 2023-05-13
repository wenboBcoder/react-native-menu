import React, { useEffect } from 'react'
import {StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'

import MealList from '../components/MealList'


export default function CategoryMealsScreen(props) {
  const {navigation,route:{params:{categoryId}}}=props
  const availableMeals=useSelector(state=>{return state.meals.filterMeals})

  const catId=categoryId
  const displayedMeals=availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0)
  return <MealList listData={displayedMeals} navigation={navigation}/>    
}
const styles=StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})