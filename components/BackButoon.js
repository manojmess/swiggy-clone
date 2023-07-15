import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColor } from '../themes'
import * as Icon from "react-native-feather";
export default function BackButoon() {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity
                style={{ backgroundColor: themeColor.bgColor(1) }}
                className="bg-gray-800 rounded-full p-2 shadow-lg absolute top-14 left-5 z-50"
                onPress={() => navigation.goBack()}>
                <Icon.ArrowLeft stroke={'white'} strokeWidth={4} />
            </TouchableOpacity>
        </>
    )
}