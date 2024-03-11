import React from 'react';
import { ChannelList } from 'stream-chat-expo';
import { useAppContext } from '../Services/AppContext';
import { chatUserId } from '../Services/chatConfig';

const filters = {
    members: {
      '$in': [chatUserId]
    },
  };
  
  const sort = {
    last_message_at: -1,
  };

  const ChannelListScreen = props => {
    const { setChannel } = useAppContext();
    return (
      <ChannelList
        filters={filters}
        sort={sort}
        onSelect={(channel) => {
            const { navigation } = props;
            setChannel(channel)
            navigation.navigate('ChannelScreen');
          }}
      />
    );
  };

  export default ChannelListScreen