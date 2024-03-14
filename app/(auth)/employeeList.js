import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import useEmployeeList from '../../hooks/useEmployeeList'
import usePostEmployee from '../../hooks/usePostEmployee'
import useUpdateEmployee from '../../hooks/useUpdateEmployee'

const EmployeeList = () => {
    const { data, isLoading, isError } = useEmployeeList()
    const { mutate } = usePostEmployee()
    const { mutate: updateMutate } = useUpdateEmployee()
    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 10, alignItems: 'center', justifyContent: 'center', borderWidth: .5, margin: 10, }}>
                <Text>{item?.id}</Text>
                <Text>{item?.name}</Text>
            </View>
        )
    }

    const addEmployee = async () => {
        // await mutate({name: 'hello'})
        await updateMutate({ id: 2, employeeBody: { name: 'Nekkse sho' } })
    }
if(isLoading){
    return <Text>is Loading ....</Text>
}
    return (
        <View>
            <Button title='Add Employee' onPress={addEmployee} />
            <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default EmployeeList