import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';

const AppointmentCard = ({ Appointment }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(Appointment.status);
    const [statusChanged, setStatusChanged] = useState(false);

    const handleStatusChange = (selectedItem) => {
        setSelectedStatus(selectedItem);
        setStatusChanged(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
        if (statusChanged) {
            console.log(`Status changed to: ${selectedStatus}`);
            axios.post(`http://localhost:3001/api/appointments/${selectedStatus}`, { id: Appointment.id })
            setStatusChanged(false);
        }
    };

    const statusOptions = [
        { key: 'Pending', value: 'Pending' },
        { key: 'Completed', value: 'Completed' },
        { key: 'Rejected', value: 'Rejected' },
        { key: 'Cancelled', value: 'Cancelled' },
    ];

    const doctorName = 'Dr. ' + Appointment.doctor.Name;
    const patientName = Appointment.patient.Name;
    const Date = Appointment.Time;
    const time = Appointment.Time;
    const date = Appointment.Time;



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.doctorName}>{doctorName}</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.status}>{selectedStatus}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.patientName}>{patientName}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <FlatList
                            data={statusOptions}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleStatusChange(item.key)}>
                                    <Text
                                        style={[
                                            styles.modalOption,
                                            item.key === selectedStatus && styles.modalOptionSelected,
                                        ]}
                                    >
                                        {item.value}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity onPress={handleModalClose}>
                            <Text style={styles.modalCloseButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    doctorName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        backgroundColor: '#F0AD4E',
        color: '#fff',
        padding: 5,
        borderRadius: 5,
        fontWeight: 'bold',
    },
    body: {
        flexDirection: 'column',
    },
    patientName: {
        fontSize: 16,
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    time: {
        fontSize: 14,
        color: '#888',
    },
    modalContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: 300,
    },
    modalOption: {
        fontSize: 16,
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    modalOptionSelected: {
        backgroundColor: '#F0AD4E',
        color: '#fff',
    },
    modalCloseButton: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: '#F0AD4E',
    },
});

export default AppointmentCard;







