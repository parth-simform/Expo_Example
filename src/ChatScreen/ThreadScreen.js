import React from 'react';
import { Channel } from 'stream-chat-expo';
import { Thread } from 'stream-chat-expo'; // Or stream-chat-expo
import { useAppContext } from '../Services/AppContext';

const ThreadScreen = () => {
    const { channel, thread } = useAppContext();

    return (
        <Channel channel={channel} thread={thread} threadList>
            <Thread />
        </Channel>
    );
}
export default ThreadScreen