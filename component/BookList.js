import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import { useBookStore } from '../store/useBookStore';

const BookList = () => {

    const [name, setName] = useState('')
    const { books, addBook, reset, updateStatus } = useBookStore()

    const onAddData = () => {
        addBook(name)
        // reset()
    }

    return (
        <View>
            <TextInput value={name} onChangeText={setName}
                style={styles.textInput} />
            <Button title='Submit' onPress={onAddData} />
            {books?.map((item, i) => {
                return <View style={{ flexDirection: 'row' }} key={i?.toString()}>
                    <Text>{item?.name}</Text>
                    <Text>{item?.status}</Text>
                </View>
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'red',
        marginHorizontal: 20,
        height: 20
    }
})

export default BookList;
