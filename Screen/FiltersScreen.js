import React ,{useEffect, useState, useCallback}from 'react'
import { View, Text, StyleSheet,Switch,Platform } from 'react-native'
import Color from '../constants/Colors'

const FilterSwitch=props=>{
  return (
    <View style={styles.filterContainer}>
          <Text>{props.label}</Text>
          <Switch
            trackColor={{true:Color.primaryColor}}
            thumbColor={Platform.OS=='android'?Color.primaryColor:''}
            value={props.state} 
            onValueChange={props.onChange}/>
      </View>
  )
}
export default function FiltersScreen(props) {
  const [isGlutenFree,setIsGlutenFree]=useState(false)
  const [isLactoseFree,setIsLactoseFree]=useState(false)
  const [isVegan,setIsVegan]=useState(false)
  const [isVegetarian,setIsVegetarian]=useState(false)
  const saveFilter=useCallback(()=>{
    const appliedFilter= {
      isGlutenFree:isGlutenFree,
      isLactoseFree:isLactoseFree,
      isVegan:isVegan,
      isVegetarian:isVegetarian
    }
    console.log('appliedFilter',appliedFilter)
  },[isGlutenFree,isLactoseFree,isVegan,isVegetarian])

  useEffect(()=>{
    console.log(props.navigation.setParams({save:saveFilter()}))
  },[saveFilter])
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue=>setIsGlutenFree(newValue)}></FilterSwitch>
      <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue=>setIsLactoseFree(newValue)}></FilterSwitch>
      <FilterSwitch label='Vegan' state={isVegan} onChange={newValue=>setIsVegan(newValue)}></FilterSwitch>
      <FilterSwitch label='Gluten-free' state={isVegetarian} onChange={newValue=>setIsVegetarian(newValue)}></FilterSwitch>
    </View>
  )
}
const styles=StyleSheet.create({
 screen:{
  flex:1,
  alignItems:'center'
 },
  title:{
    fontFamily:'Sans-Bold',
    fontSize:22,
    margin:20,
    textAlign:'center'
  },
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%',
    marginVertical:15
  }
})  