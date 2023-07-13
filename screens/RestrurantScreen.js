import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import * as Icon from "react-native-feather";
import { themeColor } from '../themes';
import Dieshes from '../components/Dieshes';
export default function RestrurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation()
  let item = params
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />
          <TouchableOpacity className="bg-gray-800 rounded-full p-2 shadow-lg absolute top-14 left-5"
            onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft stroke={themeColor.bgColor(1)} strokeWidth={4} />
          </TouchableOpacity>
          <View className="bg-white -mt-12 pt-3" style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
            <Text className="text-3xl font-bold p-2 left-2 ">
              {item.name}
            </Text>
            <View className="flex-row space-x-1 left-2">
              <View className="flex-row items-center space-x-1 px-2">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                <Text className="text-sm">
                  <Text className="text-green-700">
                    {item.stars}
                  </Text>
                  <Text className="text-green-500">
                    ({item.reviews}) . <Text className="font-bold text-gray-700">{item.category}</Text>
                  </Text>
                </Text>
              </View>

            </View>
            <View className="flex-row items-center space-x-1 p-1  ml-3">
              <Icon.MapPin height={14} width={14} stroke='grey' />
              <Text className="text-sm text-gray-500">
                Nearby {item.address}
              </Text>
            </View>
            <Text className="text-gray-600 font-semibold text-lg ml-[13px] mt-2">
              {item.description}
            </Text>
          </View>
          <View className="bg-white pb-40">
            <Text className="text-3xl text-gray-700 font-bold  ml-3 my-4">
              Menu</Text>
            {item.dishes.map((dish, index) => {
              return (<Dieshes item={dish} />)
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}