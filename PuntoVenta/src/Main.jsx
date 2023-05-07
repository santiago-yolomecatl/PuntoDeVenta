import React, { useState } from 'react'
import { Text, View, TextInput, Platform, StyleSheet, Button, Image, Alert } from 'react-native'
import Constants from 'expo-constants'
import Registrarse from './Components/Registrarse'
import Login from './Components/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Components/Menu'
import Usuarios from './Components/Screen/Usuarios'
const Stack = createNativeStackNavigator();
const Main = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="registrarse" component={Registrarse} />
                <Stack.Screen name="menu" component={Menu} />
                <Stack.Screen name="usuarios" component={Usuarios} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Main