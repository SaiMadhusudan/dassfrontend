import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { View } from 'react-native';
import { Button, Dialog, Portal, Provider, Text } from 'react-native-paper';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



const BookingDialog = ({ onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selected, setSelected] = useState('');


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleBooking = () => {
        // Call booking API or perform other booking-related actions
        onClose();
    };

    return (
        <div>
            <h2>Select a date and time for your booking</h2>
            <div>
                <Calendar
                    style={{
                        borderWidth: 1,
                        borderColor: 'orange',
                        height: 250
                    }}

                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e'
                    }}
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                    enableSwipeMonths={true}
                />
            </div>
            <div>
                <label htmlFor="time-picker">Select a time:</label>
                <input type="time" id="time-picker" onChange={handleTimeChange} />
            </div>
            <button disabled={!selectedDate || !selectedTime} onClick={handleBooking}>
                Book Now
            </button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default BookingDialog;

