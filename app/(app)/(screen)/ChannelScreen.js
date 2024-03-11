import React from 'react';
import { Channel, MessageInput, MessageList } from 'stream-chat-expo';
import { View } from 'react-native';
import { useAuth } from '../../../context/auth';
import { useRouter } from 'expo-router';

const ChannelScreen = (props) => {
  const { channel, setThread } = useAuth();
  const router = useRouter()

  return (
    <Channel channel={channel}>
      <MessageList
        onThreadSelect={(message) => {
          if (channel?.id) {
            setThread(message);
            router.push('./ThreadScreen')
          //   navigation.navigate('ThreadScreen');
          }
        }}
      />
      <View style={{ marginBottom: 10 }}>
        <MessageInput />
      </View>
    </Channel>
  );
};

export default ChannelScreen