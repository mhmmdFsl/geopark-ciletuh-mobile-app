import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { HomeScreen } from './HomeScreen';
import { Hotel } from './Hotel';
import { Restaurant } from './Restaurant';
import { Search } from './Search';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                activeTintColor: '#38908F',
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Hotel"
                component={Hotel}
                options={{
                    tabBarLabel: 'Hotel',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="hotel" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Restaurant"
                component={Restaurant}
                options={{
                    tabBarLabel: 'Rumah Makan',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="utensils" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Cari',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name = "search" color = {color} size = {size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export {BottomTab}