import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const DoctorCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardDetails}>
        <Text style={styles.name}>Dr. Jane Doe</Text>
        <Text style={styles.basicDetails}>General Practitioner</Text>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Chat pressed")}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Book Appointment pressed")}>
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Request pressed")}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardDetails: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  basicDetails: {
    fontSize: 16,
    color: '#888',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DoctorCard;
