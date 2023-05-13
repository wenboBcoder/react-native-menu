import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, FlatList, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";



export default function CategoriesScreen(props) {
    const renderGridItem=(itemData)=>{
        return <CategoryGridTile  title={itemData.item.title} color={itemData.item.color} onSelect={()=>{props.navigation.navigate('CategoryMealsScreen',{categoryId:itemData.item.id,screen:'MealsNavigator',Options:{title:itemData.item.id}})}} />
        
    }
    return (
        <FlatList keyExtractor={item=>item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}></FlatList>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
