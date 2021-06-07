import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Detail, HomeScreen } from '../Component';

const LogedIn = ({navigation}) => {

    const Stack = createStackNavigator()
    
    return(
            <Stack.Navigator initialRouteName = 'HomeScreen'>
                <Stack.Screen 
                                name = 'HomeScreen' 
                                component = {HomeScreen} 
                                options = {{
                                    title: 'Geopark Mobile',
                                    headerTintColor: '#fff',
                                    headerTitleAlign: 'center',
                                    headerStyle: {
                                        height: 50
                                    },
                                    headerTitleStyle: {
                                        color: '#333',
                                        fontSize: 14
                                    }
                                }} />
                <Stack.Screen name = 'Detail' component = {Detail} options = {{headerShown: false}} />
            </Stack.Navigator> 
    )

}


export default LogedIn