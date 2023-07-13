import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { themeColor } from '../themes';
export default function RestaurantCard({ details }) {

  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restrurant', { ...details })}
    >
      <View
        className="text-white bg-white mt-2 mr-6 rounded-3xl shadow-xl">
        <Image source={details.image} className="w-64 h-36 rounded-t-3xl" />
        <View className="px-2 pb-4 space-y-2">
          <Text className="font-bold text-lg pt-2">
            {details.name}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 px-2">
          <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
          <Text className="text-sm">
            <Text className="text-green-700">
              {details.stars}
            </Text>
            <Text className="text-green-500">
              ({details.reviews}) . <Text className="font-bold text-gray-700">{details.category}</Text>
            </Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 px-2 py-2">
          <Icon.MapPin height={14} width={14} stroke='grey' />
          <Text className="text-sm text-gray-500">
            Nearby {details.address}
          </Text>
        </View>
      </View>

    </TouchableWithoutFeedback>
  )
}