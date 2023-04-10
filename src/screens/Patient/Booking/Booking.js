// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Button, Dialog, Portal, Provider } from 'react-native-paper';
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const BookingDialog = ({ onClose }) => {
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedTime, setSelectedTime] = useState(null);
//     const [selected, setSelected] = useState('');
//     //const [date, setDate] = useState(new Date())

//     const navigation = useNavigation();


//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//     };

//     const handleTimeChange = (event) => {
//         setSelectedTime(event.target.value);
//     };

//     const handleBooking = () => {
//         // Call booking API or perform other booking-related actions
//         onClose();
//     };
//     const [mydate, setDate] = useState(new Date());
//     const [displaymode, setMode] = useState('date');

//     return (
//         <View>
//             <Text>Select a date and time for your booking</Text>
//             <View>
//                 {/* <Calendar
//                     style={{
//                         borderWidth: 1,
//                         borderColor: 'orange',
//                         height: 450
//                     }}

//                     theme={{
//                         backgroundColor: '#ffffff',
//                         calendarBackground: '#ffffff',
//                         textSectionTitleColor: '#b6c1cd',
//                         selectedDayBackgroundColor: '#00adf5',
//                         selectedDayTextColor: '#ffffff',
//                         todayTextColor: '#00adf5',
//                         dayTextColor: '#2d4150',
//                         textDisabledColor: '#d9e'
//                     }}
//                     onDayPress={day => {
//                         setSelected(day.dateString);
//                         console.log(day.dateString);
//                     }}
//                     markedDates={{
//                         [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
//                     }}
//                     enableSwipeMonths={true}
//                 /> */}
//             </View>


//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BookingDialog")}>
//                 <Text style={styles.buttonText}>Book</Text>
//             </TouchableOpacity>

//             <View></View>
//             <View></View>

//             <View></View>

//             <View></View>

//             <View></View>

//             <View></View>

//             <DateTimePicker testID="dateTimePicker" value={mydate} mode={displaymode}
//                 is24Hour={true} display="default" onChange={() => {
//                     console.log("Date")
//                 }} >Book Here</DateTimePicker>
//         </View>
//     );
// };



// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 20,
//         marginVertical: 10,
//         marginHorizontal: 20,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     cardDetails: {
//         marginBottom: 10,
//     },
//     name: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     basicDetails: {
//         fontSize: 16,
//         color: '#888',
//     },
//     cardActions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     button: {
//         backgroundColor: '#007bff',
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         borderRadius: 5,
//         flex: 1,
//         marginHorizontal: 5,
//     },
//     buttonText: {
//         color: '#fff',
//         textAlign: 'center',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default BookingDialog;



import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import CurrentDate from "./DateTime";
export default function App() {
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <SafeAreaProvider>
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
          Pick single date
        </Button>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
        <CurrentDate></CurrentDate>
      </View>
    </SafeAreaProvider>
  );
}