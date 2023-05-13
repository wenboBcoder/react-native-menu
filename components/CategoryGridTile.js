import React ,{useCallback}from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function CategoryGridTile(props) {
    let TouchableCmp=TouchableOpacity
    if(Platform.OS=='android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback
    }
    const [fontsLoaded] = useFonts({
        'Sans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        'Sans-Bold':require('../assets/fonts/OpenSans-Regular.ttf')
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
  return (
    <View style={styles.gridItem} onLayout={onLayoutRootView}>
        <TouchableCmp style={{flex:1}} onPress={props.onSelect}>
            <View style={{...styles.container,backgroundColor:props.color}}><Text style={styles.title} numberOfLines={2}>{props.title}</Text></View>
        </TouchableCmp>
    </View>
  )
}

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        elevation:3,
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowRadius:10,
        shadowColor:{width:0,height:2},
        elevation:3,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    title:{
        fontSize:22,
        fontFamily:'Sans-regular',
        textAlign:'right'
    }

})