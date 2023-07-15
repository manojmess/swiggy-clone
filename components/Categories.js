import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'
import { themeColor } from '../themes'
export default function Categories() {
    const [activeCat, setActiveCat] = useState(null)
    return (
        <View className="mt-4">
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-x-scroll"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}>

                {categories.map((cat, index) => {
                    let isActive = cat.id === activeCat;
                    let btnClass = isActive ? 'shadow  rounded-full  bg-gray-800' : 'shadow  rounded-full  bg-gray-400'
                    let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500'

                    return (
                        <View key={cat.id} className="flex justify-center items-center mr-3 rounded-full" >
                            <TouchableOpacity
                            style={{backgroundColor:themeColor.bgColor(1)}}
                                onPress={() => setActiveCat(cat._id)}
                                className={"p-1" + btnClass}>
                                <Image style={{ width: 55, height: 55 }} className='shadow  rounded-full  ' source={cat.image}
                                />
                            </TouchableOpacity>
                            <Text className={"text-sm" + textClass}>{cat.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}