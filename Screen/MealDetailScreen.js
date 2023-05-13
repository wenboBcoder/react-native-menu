import React ,{useEffect,useCallback}from 'react'
import {StyleSheet, View, Text, Button, ScrollView, Image } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'

import DefaultText from '../components/DefaultText'
import {toggleFavorite} from '../Store/actions/meals'

const ListItem=props=>{
  return (<View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>)
}
export default function MealDetailScreen(props) {
  const {mealId}=props.route.params
  const availableMeals=useSelector(state=>state.meals.meals)
  const selectedMeal=availableMeals.find(meal=>meal.id===mealId)

  const dispatch=useDispatch()
  const toggleFavoriteHandler=useCallback(()=>{
    dispatch(toggleFavorite(mealId))
  },[dispatch,mealId])

  // useEffect(()=>{
  // 有报错  
  //   props.navigation.setParams({toggleFav:toggleFavoriteHandler()})
  //   // props.navigation.setParams({mealTitle:selectedMeal.title})
  // },[toggleFavoriteHandler])

  
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} />
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredient</Text>
        {selectedMeal.ingredients.map(ingredient=>
          <ListItem key={ingredient}>{ingredient}</ListItem>
          )}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step=>
          <ListItem key={step}>{step}</ListItem>
          )}
      <View style={styles.screen}>
        <Text>{selectedMeal.title}</Text>
        <Button title="Go Back" onPress={() => props.navigation.popToTop()} />
      </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
    image: {
        width:'100%',
        height:200,
    },
    details:{
      flexDirection:'row',
      padding:15,
      justifyContent:'space-around'
    },
    title:{
      fontFamily:'Sans-Bold',
      textAlign:'center',
      fontSize:18
    },
    listItem:{
      marginVertical:10,
      marginHorizontal:20,
      borderColor:'#ccc',
      borderWidth:1,
      padding:10
    }
})