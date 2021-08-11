import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

import { ButtonNew } from '../components/ButtonNew';

import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Notification } from '../pages/Notification';
import { Profile } from '../pages/Profile';
import { Search } from '../pages/Search';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions = {{

                // define propriedades da barra
                tabBarStyle: {
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent',

                    height: 57
                },

                // define propriedades do texto
                tabBarLabelStyle: {
                    fontSize: 10.5
                },

                // define propriedades do ícone
                tabBarIconStyle: {

                },

                // define propriedades do item (ícone e texto)
                tabBarItemStyle: {
                    paddingBottom: 7
                },

                tabBarActiveTintColor: '#1EBD00'
            }}
            >
            <Tab.Screen
                name = 'Home' 
                component = {Home}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Entypo
                            name = 'home'
                            size = {size}
                            color = {color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name = 'Search' 
                component = {Search}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons
                            name = 'search'
                            size = {size}
                            color = {color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name = 'New' 
                component = {New}
                options = {{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        null
                    )
                }}
            />
            <Tab.Screen
                name = 'Notification' 
                component = {Notification}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name = 'notifications'
                            size = {size}
                            color = {color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name = 'Profile' 
                component = {Profile}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather
                            name = 'user'
                            size = {size}
                            color = {color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}