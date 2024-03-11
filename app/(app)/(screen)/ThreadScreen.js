import React from 'react';
import { Channel } from 'stream-chat-expo';
import { Thread } from 'stream-chat-expo'; // Or stream-chat-expo
import { useAuth } from '../../../context/auth';

const ThreadScreen = () => {
    const { channel, thread } = useAuth();

    return (
        <Channel channel={channel} thread={thread} threadList>
            <Thread />
        </Channel>
    );
}
export default ThreadScreen