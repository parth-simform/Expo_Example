import React from 'react';
import { Slot, Stack } from 'expo-router'
import { AuthProvider } from '../context/auth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootLayoutNav = () => {
    return (
        <AuthProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
            </GestureHandlerRootView>
        </AuthProvider>
    );
}

export default RootLayoutNav;
