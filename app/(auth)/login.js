import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/auth'

const Login = () => {
  const { signIn } = useAuth()
  return (
    <SafeAreaView>
      <Text>Login screen </Text>
      <Button
        title='Sign In'
        onPress={signIn}
      />
    </SafeAreaView>
  )
}

export default Login