import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { BottomTab, Detail, HomeScreen } from '../Component';

const LogedIn = ({navigation}) => {

    const Stack = createStackNavigator()
    
    return(
            <BottomTab />
    )

}


export default LogedIn