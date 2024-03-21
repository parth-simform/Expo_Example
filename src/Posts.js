import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import usePosts from './usePosts';
import { Text } from './Text';
import colors from './constants';
import { storage } from './Services/Storage';

export const Posts = ({ navigation }) => {
    const { data, isLoading, isSuccess } = usePosts();
    const dataArr = data?.pages?.flat()

    const onSaveData = () => {
        const user = {
            name: "ascas",
            location: "localdd",
            email: 'abcd123@gmail.com',
        }
        storage.set('username', JSON.stringify(user))
        storage.set('isBool', false)
        storage.set('contact', 123456789)
    }

    const onGetData = () => {
        const data = storage.getString('username')
        const final = JSON.parse(data)
        console.log(
            final, '<==',
            storage.getBoolean('isBool'),
            storage.getNumber('contact')
        );
    }

    return (
        <View style={styles.container}>
            {isLoading && (
                <React.Fragment>
                    <Text>Loading...</Text>
                </React.Fragment>
            )}

            {isSuccess && (
                <React.Fragment>
                    <Text style={styles.header}>all posts by UTA Expo</Text>
                    <Button title='Save Data' onPress={onSaveData} />
                    <Button title='Get Data' onPress={onGetData} />
                    <FlatList
                        data={dataArr}
                        style={styles.wrapper}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.push('Post', { post: item })}
                                style={styles.post}
                            >
                                <View style={styles.item}>
                                    <Text style={styles.postTitle}>
                                        {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </React.Fragment>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10
    },
    wrapper: {
        flex: 1,
        paddingVertical: 30
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    header: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.primary,
        paddingVertical: 10
    },
    post: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    postTitle: { color: colors.white, textTransform: 'capitalize' }
});