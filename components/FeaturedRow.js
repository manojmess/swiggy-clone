import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColor } from '../themes'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({ title, description, restaurants }) {
    return (
        <View>
            <View className="flex-row justify-between px-2 items-center">
                <View>
                    <Text className="text-lg font-bold">{title}</Text>
                    <Text className="text-xs text-gray-500 font-semibold">{description}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text className="text-sm font-bold" style={{ color: themeColor.bgColor(1) }}>See All</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantCard details={restaurant} key={restaurant.id}  />
                        )
                    })
                }



            </ScrollView>
        </View>
    )
}