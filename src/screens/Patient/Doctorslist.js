import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import DoctorCard from './DoctorCard'

export default function Doctorlist({ navigation }) {
  return (
    <>
      <Header>Hello user</Header>
      <DoctorCard />
    </>

  )
}
