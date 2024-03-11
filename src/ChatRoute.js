
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useChatClient } from './Services/useChatClient';
import { Chat, OverlayProvider } from 'stream-chat-expo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { chatApiKey } from './Services/chatConfig';
import { StreamChat } from 'stream-chat';
import { AppProvider } from './Services/AppContext';
import ChannelListScreen from './ChatScreen/ChannelListScreen';
import ChannelScreen from './ChatScreen/ChannelScreen';
import ThreadScreen from './ChatScreen/ThreadScreen';

const Stack = createStackNavigator();

const NavigationStack = () => {
    const { clientIsReady } = useChatClient();
    const chatClient = StreamChat.getInstance(chatApiKey);

    if (!clientIsReady) {
        return <Text>Loading chat ...</Text>
    }

    return (
        <OverlayProvider>
            <Chat client={chatClient}>
            <Stack.Navigator>
                <Stack.Screen name="ChannelList" component={ChannelListScreen} />
                <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
                <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
            </Stack.Navigator>
            </Chat>
        </OverlayProvider>
    );
};

const ChatRout = () => {
    return (
        <AppProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <NavigationContainer>
                    <NavigationStack />
                </NavigationContainer>
                </SafeAreaView>
            </GestureHandlerRootView>
        </AppProvider>
    );
};

export default ChatRout
