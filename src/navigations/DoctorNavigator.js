import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import DAppointments from '../screens/Doctor/DAppointments';
import Dashboard_doctor from '../screens/Doctor/Dashboard_doctor';
import Patientslist from '../screens/Doctor/Patientslist';

const Tab = createBottomTabNavigator();

function DoctorNavigator() {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Dashboard_doctor" component={Dashboard_doctor} />
            <Tab.Screen name="DAppointments" component={DAppointments} />
            <Tab.Screen name="Patientslist" component={Patientslist} />
        </Tab.Navigator>
    );
}

export default DoctorNavigator;