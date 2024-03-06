import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image'

const imageUrls = [
  'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.webp',
  'https://w0.peakpx.com/wallpaper/852/116/HD-wallpaper-mahadev-lord-shiva-shiva-hindu-bhakti-devotional-god.jpg',
  'https://www.neonattack.com/cdn/shop/products/IMG_8618_1080x.jpg?v=1656148229',
  'https://www.neonattack.com/cdn/shop/products/IMG_8999_1080x.jpg?v=1656321978',
  'https://via.placeholder.com/150',
  'https://w0.peakpx.com/wallpaper/730/501/HD-wallpaper-iphone-14-pro.jpg',
  'https://www.neonattack.com/cdn/shop/products/1macaw_1080x.png?v=1649332965',
  'https://www.neonattack.com/cdn/shop/products/IMG_9005_1024x1024@2x.jpg?v=1656321978',
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <FastImage source={{ uri: item }} style={styles.image}/>
    </View>
  );

  return (
    <FlatList
      data={imageUrls}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default App;
