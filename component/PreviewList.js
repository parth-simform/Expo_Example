import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useAuth } from '../context/auth';
import { chatUserId } from '../src/Services/chatConfig';
import { router } from 'expo-router';

const PreviewList = ({ item }) => {
    const { setChannel, channel } = useAuth()
    const lastMsg = item?.latestMessagePreview
    const membersList = Object.values(item.channel.state.members)
    const groundInfo = item.channel.data
    const isGroup = membersList?.length > 2
    const userInfo = membersList.find((item) => item?.user?.id !== chatUserId)

    return (
        <TouchableOpacity
            onPress={() => {
                setChannel(item.channel)
                router.push('./ChannelScreen')
            }}
            style={styles.card}
        >
            {
                isGroup ?
                    <Text>{groundInfo?.name}</Text>
                    :
                    <Text>{userInfo?.user?.name ?? membersList[0]?.user?.name}</Text>
            }
            <Text>last msg: {lastMsg?.messageObject?.text}</Text>
            <Text>Created at: {lastMsg?.created_at}</Text>
            <Text>Unread msg: {item?.unread}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderWidth: .5,
    }
})
export default PreviewList