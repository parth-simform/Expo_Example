
import React from 'react'
import { Stack } from 'expo-router'
import { Chat, OverlayProvider } from 'stream-chat-expo'
import { useChatClient } from '../../../src/Services/useChatClient';
import { chatApiKey } from '../../../src/Services/chatConfig';
import { StreamChat } from 'stream-chat';
import { Text } from 'react-native';

const ScreenLayout = () => {
    const { clientIsReady } = useChatClient();
    const chatClient = StreamChat.getInstance(chatApiKey);

    if (!clientIsReady) {
        return <Text>Loading chat ...</Text>
    }

    return (
        <OverlayProvider>
            <Chat client={chatClient} enableOfflineSupport>
                <Stack>
                    <Stack.Screen name={'index'} options={{ title: 'Home' }} />
                    <Stack.Screen name={'ChannelScreen'} options={{ title: 'Users' }} />
                    <Stack.Screen name={'ThreadScreen'} options={{ title: 'Thread' }} />
                </Stack>
            </Chat>
        </OverlayProvider>
    )
}

export default ScreenLayout