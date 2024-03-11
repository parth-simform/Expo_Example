import { Link, router, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { chatUserId } from '../../../src/Services/chatConfig';
import { useAuth } from '../../../context/auth';

const filters = {
    members: {
        '$in': [chatUserId]
    },
};

const sort = {
    last_message_at: -1,
};

const Index = () => {
    const { setChannel } = useAuth()
    const router = useRouter()

    return (
        <ChannelList
            filters={filters}
            sort={sort}
            onSelect={(channel) => {
                setChannel(channel)
                router.push('./ChannelScreen')
            }}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        backgroundColor: 'black',
        maxWidth: 200,
        padding: 10
    },
    text: {
        color: 'white',
        fontWeight: '900'
    }
})

export default Index;
