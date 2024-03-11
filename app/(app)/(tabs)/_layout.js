
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name={'index'} options={{ title: 'Home' }} />
            <Tabs.Screen name={'users'} options={{ title: 'Users' }} />
        </Tabs>
    )
}

export default TabsLayout