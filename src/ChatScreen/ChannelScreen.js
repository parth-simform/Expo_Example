import React from 'react';
import { Channel, MessageInput, MessageList } from 'stream-chat-expo';
import { useAppContext } from '../Services/AppContext';
import { View } from 'react-native';

const ChannelScreen = (props) => {
  const { channel, setThread } = useAppContext();
  return (
    <Channel channel={channel}>
      <MessageList
        onThreadSelect={(message) => {
          const { navigation } = props;
          if (channel?.id) {
            setThread(message);
            navigation.navigate('ThreadScreen');
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