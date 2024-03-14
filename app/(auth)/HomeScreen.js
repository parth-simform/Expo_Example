import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import useGetPosts from '../../hooks/useGetPosts';

const HomeScreen = () => {
    const { data, isLoading, isError, refetch, hasNextPage, fetchNextPage } = useGetPosts()
    const dataArr = data?.pages?.flat()

    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', borderWidth: .5, margin: 10, }}>
                <Text>{item?.id}</Text>
                <Text>{item?.title}</Text>
            </View>
        )
    }

    const onReachEnd = ()=>{
        if(hasNextPage && !isLoading) fetchNextPage()
    }

    return (
        <View>
            <FlatList
                data={dataArr}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                onEndReached={onReachEnd}
                onEndReachedThreshold={.5}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
