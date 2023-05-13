import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity,ImageBackground} from 'react-native'
import DefaultText from './DefaultText'

export default function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
            <View style={{...styles.mealRow,...styles.mealHeader}}>
              <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{...styles.mealRow,...styles.mealDetail}}>
              <DefaultText>{props.duration}m</DefaultText>
              <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
            </View>
          </View>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
  mealItem:{
    height:200,
    width:'90%',//这里特意调成90，页面排版不居中，查找原因
    backgroundColor:'#f5f5f5',
    borderRadius:10,
    overflow:'hidden',
  },
  bgImage:{
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
  },
  mealRow:{
    flexDirection:'row'
  },
  mealHeader:{
    height:'80%',
    backgroundColor:'#CCC'
  },
  mealDetail:{
    paddingHorizontal:10,
    justifyContent:'space-between',
    alignItems:'center',
    height:'15%'
  },
  title:{
    //缺少字体
    fontSize:16,
    color:'white',
    textAlign:'center'
  },
  titleContainer:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingVertical:5,
    paddingHorizontal:12
  }
})