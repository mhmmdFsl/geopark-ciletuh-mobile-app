import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, {useEffect, useState} from 'react'
import { Text } from 'react-native'
import { Provider, useSelector } from 'react-redux'
import { Login, Register } from '../Component'
import { SplashScreen } from '../Component/SplashScreen'
import DeviceStorage from '../Services/DevicesStorage'
import Store from '../Services/Store'
import LogedIn from './LogedIn'

const RootPage = (props) => {

    const Stack = createStackNavigator()

    const Auth = () => {
        // Stack Navigator for Login and Sign up Screen
        return (
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    };

    return(
        
        <Provider store = {Store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName = 'SplashScreen' >
                    <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Auth' component = {Auth} options = {{ headerShown: false }} />
                    <Stack.Screen name='LogedIn' component={LogedIn} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default RootPage