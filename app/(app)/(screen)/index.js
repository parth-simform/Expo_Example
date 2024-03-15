import { Link, router, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { ChannelList, useChatContext } from 'stream-chat-expo';
import { chatApiKey, chatSecretKey, chatUserId } from '../../../src/Services/chatConfig';
import { useAuth } from '../../../context/auth';
import { StreamChat } from 'stream-chat';
import PreviewList from '../../../component/PreviewList';
const filters = {
    members: {
        '$in': [chatUserId],
    },
};

const sort = {
    last_message_at: -1,
};

const Index = () => {
    const { setChannel, channel } = useAuth()
    const { client, isOnline } = useChatContext();
    const router = useRouter()

    const btn = async () => {
        const chatClient = StreamChat.getInstance(chatApiKey, chatSecretKey);
        const channel = chatClient.channel('messaging', 'Funnmore', {
            name: 'Fun N More',
        });
        // Here, 'travel' will be the channel ID
        // await channel.create();
        console.log(channel.state);
        await channel.sendMessage({
            text: "my message",
            pinned: true,
            pin_expires: "2077-01-01T00:00:00Z",
          });
    }

    return (
        <>
            <ChannelList
                filters={filters}
                sort={sort}
                onSelect={(channel) => {
                    setChannel(channel)
                    console.log(channel);
                    router.push('./ChannelScreen')
                }}
                Preview={(item)=>{
                    // console.log(item, '<==');
                    return <PreviewList {...{item}}/>
                }}
            />
            <Button onPress={btn} title='hello' />
        </>
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
