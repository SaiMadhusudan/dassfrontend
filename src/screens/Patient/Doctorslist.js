import React from 'react'
import Header from '../../components/Header'
import DoctorCard from './DoctorCard'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import axios from 'axios'

export default function Doctorlist({ navigation }) {
  const [user, setUser] = useContext(UserContext);
  const [Patient, setPatient] = useState(null);
  const [Doctorslist, setDoctorslist] = useState([]);
  const [RequestDoctor, setRequestDoctor] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/patients/${user.Id}`)
      .then(res => {
        setPatient(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3001/api/doctors/others/${user.Id}`)
      .then(res => {
        setDoctorslist(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])





  return (<>
    {
      (Patient)
        ?
        <>
          <Header>Your Current Doctors</Header>
          {
            Patient.Doctors.map((doctor) => {

              return (
                <DoctorCard
                  Name={doctor.Name}
                  id={doctor.id}
                  key={doctor.id}
                  BasicDetails={doctor.BasicDetails}
                  type="1"
                />
              )
            }
            )
          }
          <Header>Doctors you have requested</Header>
          {
            Patient.Requests.map((doctor) => {
              return (
                <DoctorCard
                  Name={doctor.Name}
                  id={doctor.id}
                  key={doctor.id}
                  BasicDetails={doctor.BasicDetails}
                  type="2"
                />
              )
            }
            )
          }

          <Header>Other Doctors</Header>
          {
            Doctorslist.map((doctor) => {
              return (
                <DoctorCard
                  Name={doctor.Name}
                  id={doctor.id}
                  key={doctor.id}
                  BasicDetails={doctor.BasicDetails}
                  type="0"
                />
              )
            }
            )
          }
        </>
        : <Header>Loading...</Header>

    }

  </>
  )
}
