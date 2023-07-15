import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColor } from '../themes';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';
export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white h-screen">
            <StatusBar barStyle="dark-content" />
            {/* Search Bar */}
            <View className="flex-row items-center space-x-2 pb-2 px-4" >
                <View className="flex-row flex-1 p-3 rounded-full border border-gray-300">
                    <Icon.Search height={25} width={25} stroke='grey' />
                    <TextInput className="flex-1 ml-2 " placeholder='Restrurant' />
                    <View className="flex-row space-x-1 items-center border-0  border-l-2 border-l-gray-400 pl-1 ">
                        <Icon.MapPin height={20} width={20} stroke='grey' />
                        <Text className="text-gray-600 text-[11px]">New York, NYC</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColor.bgColor(1) }} className="p-3 rounded-full">
                    <Icon.Sliders stroke='white' height={25} width={25} strokeWidth={2.5} />
                </View>
            </View>
            {/* Main Content */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                {/* Categories */}

                <Categories />
                {/* Featured  */}
                <View className="mt-5">
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index} title={item.title}
                                    description={item.description}
                                    restaurants={item.restaurants}
                                />
                            )
                        })
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}