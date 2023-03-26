import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {
    StartScreen,
    LoginScreen
} from '../screens';

import DoctorNavigator from "./DoctorNavigator";
import PatientNavigator from "./PatientNavigator";

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name ="DoctorNavigator" component={DoctorNavigator} />
            <Stack.Screen name ="PatientNavigator" component={PatientNavigator} />
        </Stack.Navigator>
    );
}