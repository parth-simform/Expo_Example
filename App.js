
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Text } from 'react-native';
// import { useChatClient } from './src/Services/useChatClient';
// import { Chat, OverlayProvider } from 'stream-chat-expo';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { chatApiKey } from './src/Services/chatConfig';
// import { StreamChat } from 'stream-chat';
// import { AppProvider } from './src/Services/AppContext';
// import ChannelListScreen from './src/ChatScreen/ChannelListScreen';
// import ChannelScreen from './src/ChatScreen/ChannelScreen';
// import ThreadScreen from './src/ChatScreen/ThreadScreen';

// const Stack = createStackNavigator();

// const NavigationStack = () => {
//     const { clientIsReady } = useChatClient();
//     const chatClient = StreamChat.getInstance(chatApiKey);

//     if (!clientIsReady) {
//         return <Text>Loading chat ...</Text>
//     }

//     return (
//         <OverlayProvider>
//             <Chat client={chatClient}>
//             <Stack.Navigator>
//                 {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
//                 <Stack.Screen name="ChannelList" component={ChannelListScreen} />
//                 <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
//                 <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
//             </Stack.Navigator>
//             </Chat>
//         </OverlayProvider>
//     );
// };

// export default () => {
//     return (
//         <AppProvider>
//         <GestureHandlerRootView style={{ flex: 1 }}>
//             <SafeAreaView style={{ flex: 1 }}>
//                 <NavigationContainer>
//                     <NavigationStack />
//                 </NavigationContainer>
//             </SafeAreaView>
//         </GestureHandlerRootView>
//         </AppProvider>
//     );
// };




import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from './src/Main';
import ChatRout from './src/ChatRoute';

const queryClient = new QueryClient();

export default function App() {

    if(true) return <ChatRout />
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <NavigationContainer>
                <QueryClientProvider client={queryClient}>
                    <Main />
                </QueryClientProvider>
            </NavigationContainer>
        </React.Fragment>
    );
}






// import React from 'react';
// import { FlatList, Image, StyleSheet, View } from 'react-native';
// import FastImage from 'react-native-fast-image'
// import { useQuery } from 'react-query';

// const imageUrls = [
//   'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.webp',
//   'https://w0.peakpx.com/wallpaper/852/116/HD-wallpaper-mahadev-lord-shiva-shiva-hindu-bhakti-devotional-god.jpg',
//   'https://www.neonattack.com/cdn/shop/products/IMG_8618_1080x.jpg?v=1656148229',
//   'https://www.neonattack.com/cdn/shop/products/IMG_8999_1080x.jpg?v=1656321978',
//   'https://via.placeholder.com/150',
//   'https://w0.peakpx.com/wallpaper/730/501/HD-wallpaper-iphone-14-pro.jpg',
//   'https://www.neonattack.com/cdn/shop/products/1macaw_1080x.png?v=1649332965',
//   'https://www.neonattack.com/cdn/shop/products/IMG_9005_1024x1024@2x.jpg?v=1656321978',
// ];

// const App = () => {
//   const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <FastImage source={{ uri: item }} style={styles.image}/>
//     </View>
//   );

//   return (
//     <FlatList
//       data={imageUrls}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     flex: 1,
//     margin: 5,
//   },
//   image: {
//     width: '100%',
//     height: 700,
//     resizeMode: 'cover',
//     borderRadius: 8,
//   },
// });

// export default App;
