import { Link, router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Index = () => {
    const id = 1
    return (
        <View>
            <Text>Main Index Page</Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push({
                pathname: './users',
                params: {id: 1}
            })}>
                <Text style={styles.text}>Normal navigation</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`./users/${id}`)}
            >
                <Text style={styles.text}>With Diff type param navigation</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push({
                    pathname: './users/[id]',
                    params: { id: 2}
                })}
            >
                <Text style={styles.text}>With Pathname and params navigation</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        backgroundColor: 'black',
        maxWidth: 200,
        padding: 10
    },
    text: {
        color: 'white',
        fontWeight: '900'
    }
})

export default Index;
