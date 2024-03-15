import { View, Text, SafeAreaView, Button, Platform } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/auth'
import CryptoJS from 'crypto-js';
import { QueryClient, QueryClientProvider } from 'react-query';
import useGetPosts from '../../hooks/useGetPosts';
import HomeScreen from './HomeScreen';
import EmployeeList from './employeeList';
import BookList from '../../component/BookList';

// Example: AES encryption and decryption
const originalData = {name: 'Hello, Crypto-JS!'};
const secretKey = 'mySecretKey123';

// Encrypting data
const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(originalData), secretKey).toString();
console.log('Encrypted Data:', encryptedData);

// Decrypting data
const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
const data = decryptedData && JSON.parse(decryptedData)

console.log('Decrypted Data:', data?.name);
const isAndroid = Platform.OS === 'android'
const Login = () => {
  const { signIn } = useAuth()
  const client = new QueryClient()
  
  return (
    <QueryClientProvider client={client}>
      <SafeAreaView style={{ marginTop: isAndroid ? 40 : 0 }}>
        {/* <BookList /> */}
        <Text>Login screen </Text>
        <Button
          title='Sign In'
          onPress={signIn}
        />
      </SafeAreaView>
    </QueryClientProvider>
  )
}

export default Login