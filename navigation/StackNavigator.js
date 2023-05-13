import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

import CategoriesScreen from '../Screen/CategoriesScreen'
import CategoryMealsScreen from "../Screen/CategoryMealsScreen";
import MealDetailScreen from "../Screen/MealDetailScreen";
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const Stack = createNativeStackNavigator()

const option = {
    headerStyle: {
        backgroundColor: Platform.OS == 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor
}
const optionCallBack = (props) => {
    const { route: { params: { categoryId } } } = props
    const selectedCategory = CATEGORIES.find(cat => cat.id == categoryId)
    return selectedCategory
}
const mealDetailOption = props => {
    const { route: { params: { mealId } },navigation } = props
    const selectedMeal = CATEGORIES.find(cat => cat.id == mealId)
    // const toggleFavorite=navigation.getParam('toggleFav')
    // console.log('selectedMeal',selectedMeal)
    // console.log('toggleFavorite',toggleFavorite)
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <View onPress={()=>{console.log('aaa')}}>
                <Feather name="star" size={24} color="black" />
            </View>
            ),
        headerShown:false    
    }
}
export default StackNavigator = (props) => {
    return (
            <Stack.Navigator initialRouteName="CategoriesScreen" screenOptions={option} >
                <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerTitle: 'Meal Categories',headerShown:false }} />
                <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} options={(props) => ({ headerTitle: optionCallBack.title,headerShown:false })} />
                <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={mealDetailOption} />
            </Stack.Navigator>
    )
}