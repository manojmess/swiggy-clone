import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import { themeColor } from '../themes';
import * as Icon from "react-native-feather";
export default function TrackDeliveryScreen() {
    const resturant = featured.restaurants[0]
    const navigation = useNavigation()
    const handleCancel = () => {
        navigation.navigate('Home')
    }
    return (
        <View className="flex-1">
            <MapView
                initialRegion={{
                    latitude: resturant.lat,
                    longitude: resturant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType="standard"
            >
                <Marker
                    coordinate={{
                        latitude: resturant.lat,
                        longitude: resturant.lng
                    }}
                    title={resturant.title}
                    description={resturant.description}
                    pinColor={themeColor.bgColor(1)}
                />
            </MapView>
            {/* Driver details section */}
            <View className="-mt-14 relative">
                <View className="flex-row justify-between space-x-3 space-y-3 p-4 rounded-t-3xl bg-white" >
                    <View >
                        <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                        <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
                        <Text className="mt-2 text-gray-700 font-semibold">Your Order is own its way</Text>
                    </View>
                    <Image source={require('../assets/images/delivery.gif')} className="w-20 h-20 -mt-3" />
                </View>
                <View className="bg-white w-full">
                    <View
                        style={{ backgroundColor: themeColor.bgColor(0.8) }}
                        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
                        <View  className="p-1 rounded-full">
                            <Image  className="w-16 h-16 rounded-full" source={require('../assets/images/deliveryGuy.png')} />
                        </View>

                        <View className="flex-1 ml-3">
                            <Text className="text-lg font-bold text-white">Manoj</Text>
                            <Text className="text-white font-semibold">Your Rider</Text>
                        </View>
                        <View className="flex-row items-center space-x-3 mr-3">
                            <TouchableOpacity className="bg-white p-2 rounded-full">
                                <Icon.Phone fill={themeColor.bgColor(1)} stroke={themeColor.bgColor(1)} strokeWidth="1" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleCancel} className="bg-white p-2 rounded-full">
                                <Icon.X stroke={'red'} strokeWidth="5" />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>



            </View>
        </View>

    )
}