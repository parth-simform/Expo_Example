import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name='(screen)' options={{ headerShown: false }} />
        </Stack>
    );
}

export default Layout;
