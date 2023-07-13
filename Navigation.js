import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestrurantScreen from './screens/RestrurantScreen';

function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restrurant" component={RestrurantScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation