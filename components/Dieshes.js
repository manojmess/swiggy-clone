import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { themeColor } from '../themes';
import * as Icon from "react-native-feather";
export default function Dieshes({ item }) {
    return (
        <View className="flex-row bg-white shadow-3xl p-3 mb-3 mx-2 rounded-3xl items-center">
            <Image source={item.image} className="w-20 h-20 rounded-3xl" />
            <View className="flex-col flex-1 space-y-2">
                <View className="pl-3">
                    <Text className="text-lg">
                        {item.name}
                    </Text>
                    <Text className="text-gray-700">
                        {item.description}
                    </Text>
                </View>
                <View className="flex-row justify-between items-center pl-3">
                    <Text className="text-lg font-bold text-gray-700">
                        ${item.price}
                    </Text>
                    <View className="flex-row justify-between space-x-1">
                        <TouchableOpacity className="p-1 rounded-full" style={{ backgroundColor: themeColor.bgColor(1) }}>
                            <Icon.Minus stroke={'white'} strokeWidth={2} height={20} width={20} />
                        </TouchableOpacity>
                        <Text className="space-x-1 p-1">
                            2
                        </Text>
                        <TouchableOpacity className="p-1 rounded-full" style={{ backgroundColor: themeColor.bgColor(1) }}>
                            <Icon.Plus stroke={'white'} strokeWidth={2} height={20} width={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}