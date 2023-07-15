import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BackButoon from '../components/BackButoon'
import { featured } from '../constants'
import { themeColor } from '../themes'
import { ScrollView } from 'react-native'
import * as Icon from "react-native-feather";
export default function CartScreen() {
    const resturant = featured.restaurants[0]
    const navigation = useNavigation()
    return (
        <View className="flex bg-white">
            <View className="relative py-2 shadow-sm">
                <BackButoon />
                <View className="pt-10">
                    <Text className="text-center font-bold text-xl">Your cart</Text>
                    <Text className="text-center text-gray-500">{resturant.name}</Text>
                </View>

            </View>
            <View style={{ backgroundColor: themeColor.bgColor(0.5) }} className="flex-row px-4 items-center">
                <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text style={{ color: themeColor.bgColor(1) }} className="font-bold">Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginBottom: 40 }} className="bg-white pt-5">
                {
                    resturant.dishes.map((item, index) => {
                        return (
                            <View key={item.id}>
                                <View className="flex-row items-center space-x-3 py-3 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg ">
                                    <Text className="font-extrabold text-xs mr-2 " style={{ color: themeColor.bgColor(1) }}>
                                        2 ×
                                    </Text>
                                    <Image className="rounded-full  w-10 h-10 mr-2" source={item.image} />
                                    <Text className="flex-1 font-bold text-gray-700 pl-1">{item.name}</Text>
                                    <Text className="font-extrabold  text-sm mr-1" style={{ color: themeColor.bgColor(1) }}>
                                        $10
                                    </Text>
                                    <TouchableOpacity style={{ backgroundColor: themeColor.bgColor(1) }} className="p-1 rounded-full">
                                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }


            </ScrollView>
            <View className="p-6  bottom-0 rounded-t-3xl" style={{ backgroundColor: themeColor.bgColor(0.5) }}>
                <View className="flex-row justify-between  p-2">
                    <Text className="text-sm font-bold">
                        Subtotal
                    </Text>
                    <Text className="text-sm font-bold">
                        $40
                    </Text>
                </View>
                <View className="flex-row justify-between  p-2">
                    <Text className="text-sm font-bold">
                        Delivery Fees
                    </Text>
                    <Text className="text-sm font-bold">
                        $3
                    </Text>
                </View>
                <View className="flex-row justify-between  p-2">
                    <Text className="text-lg font-extrabold">
                        Order Total
                    </Text>
                    <Text className="text-lg font-bold">
                        $43
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('PreparingOrder')} 
                    style={{ backgroundColor: themeColor.bgColor(1) }} className="p-5 mt-3 mb-3 rounded-full shadow-xl  z-50">
                    <Text className="text-white text-lg text-lg font-extrabold text-center">
                        Order Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}