import {useEffect,useState} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
const Button=({title,width,bgColor,foreColor,onPress=()=>{}})=>{
  return(
  <TouchableOpacity onPress={onPress}>
  <View style={{padding:10,backgroundColor:bgColor,width:width,justifyContent:'center',alignItems:'center',borderRadius:5}}>
   <Text style={{color:foreColor,fontWeight:'bold',fontSize:14}}>{title}</Text>
  </View>
  </TouchableOpacity>
  )

}
export default Button