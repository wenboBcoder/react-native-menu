import { Meals } from "../../data/dummy-data"
import { TOGGLE_FAVORITE } from "../actions/meals"

const initState={
    meals:Meals,
    filterMeals:Meals,
    favoriteMeals:[]
}
const mealsReducers=(state=initState,action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex =state.favoriteMeals.findIndex(meal=>meal.id===action.mealId)
            if(existingIndex>=0){
                const updatedFaMeals=[...state.favoriteMeals]
                updatedFaMeals.splice(existingIndex,1)
                return {...state,favoriteMeals:updatedFavMeals}
            }else{
                const meal=state.meals.find(meal=>meal.id===action.mealId)
                return {...state,favoriteMeals:state.favoriteMeals.concat(state.meals.find(meal))}
            }
            default:
                return state
    }
    return state
}   


export default mealsReducers