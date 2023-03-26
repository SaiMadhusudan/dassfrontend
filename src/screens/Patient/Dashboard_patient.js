import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'

export default function Dashboard_patient({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Hello user</Header>
      <Paragraph>
        Welcome to Remote Pregnancy Monitor App! We understand that pregnancy
        care can be overwhelming, with multiple tests and appointments to keep
        track of. Our mobile application aims to simplify the process and
        provide you with a comprehensive tool to monitor your pregnancy journey.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
