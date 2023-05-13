import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import MealItem from './MealItem'


export default function MealList(props) {
    const {navigation,route}=props
    // const mealTitle=props.navigation.getState().routes[2].params.mealTitle
    // console.log('mealTitle',props.navigation.getState().routes[2].params.mealTitle)
    // 以上数据要通过路由传递给mealdetail,
    const renderMealItem=itemData=><MealItem 
                title={itemData.item.title} 
                onSelectMeal={()=>{navigation.navigate('MealDetailScreen',{mealId:itemData.item.id})}} 
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                duration={itemData.item.duration}
                    image={itemData.item.imageUrl} />
    return (
        <View style={styles.list}>
            <FlatList style={{width:'100%'}} data={props.listData} keyExtractor={(item,index)=>item.id+index} renderItem={renderMealItem}/>
        </View>
    )
}
const styles=StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})