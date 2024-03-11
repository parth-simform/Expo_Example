import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/auth'

import CryptoJS from 'crypto-js';

// Example: AES encryption and decryption
const originalData = 'Hello, Crypto-JS!';
const secretKey = 'mySecretKey123';

// Encrypting data
const encryptedData = CryptoJS.AES.encrypt(originalData, secretKey).toString();
console.log('Encrypted Data:', encryptedData);

// Decrypting data
const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

console.log('Decrypted Data:', decryptedData);

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