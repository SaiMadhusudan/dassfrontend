import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import PAppointments from '../screens/Patient/PAppointments';
import Dashboard_patient from '../screens/Patient/Dashboard_patient';
import Doctorslist from '../screens/Patient/Doctorslist';

const Tab = createBottomTabNavigator();

function PatientNavigator() {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="Dashboard_patient" component={Dashboard_patient} />
            <Tab.Screen name="PAppointments" component={PAppointments} />
            <Tab.Screen name="Doctorslist" component={Doctorslist} />
        </Tab.Navigator>
    );
}

export default PatientNavigator;