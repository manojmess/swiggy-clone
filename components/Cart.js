import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColor } from '../themes'
import { useNavigation } from '@react-navigation/native'

export default function Cart() {
  const navigation = useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
        onPress={()=> navigation.navigate('Cart')}
        className="flex-row justify-between items-center  mx-5 rounded-full p-4 py-4 shadow-lg"
        style={{backgroundColor:themeColor.bgColor(1)}}
        >
        <View className="px-4 p-2  rounded-full  " style={{backgroundColor:'rgba(255,255,255,0.3)'}} >
          <Text className="font-extrabold px-2 py-1 text-white ">
           4
          </Text>
        </View>
        <Text className="font-extrabold  text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">
          $23
        </Text>
        </TouchableOpacity>
    </View>
  )
}