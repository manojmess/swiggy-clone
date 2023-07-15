import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RestrurantScreen from './screens/RestrurantScreen';
import CartScreen from './screens/CartScreen';
import OrdernowScreen from './screens/OrdernowScreen';
import TrackDeliveryScreen from './screens/TrackDeliveryScreen';

function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restrurant" component={RestrurantScreen} />
                <Stack.Screen name="Cart" options={{
                    presentation: 'modal'
                }} component={CartScreen} />
                <Stack.Screen name="PreparingOrder"  options={{ presentation: 'fullScreenModal', headerShown: false }} component={OrdernowScreen} />
                <Stack.Screen name="Track"  options={{ presentation: 'fullScreenModal', headerShown: false }}  component={TrackDeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation