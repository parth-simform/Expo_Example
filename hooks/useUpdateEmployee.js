
import axios from 'axios';
import { useQueryClient, useMutation } from 'react-query'
import { url } from './config';

const useUpdateEmployee = () => {
    const queryClient = useQueryClient()
    
    const editEmployee = async ({ employeeBody, id }) => {
        const { data } = await axios.put(`${url}/${id}`, employeeBody)
        return data
    }

    return useMutation({
        mutationFn: editEmployee,
        onSuccess: (newData) => {
            queryClient.setQueryData(['employee'], (oldData) => {
                return [...oldData.filter(item => item?.id !== newData?.id), newData].sort((a, b) => a.id - b.id);
            })

        }
    })
}

export default useUpdateEmployee;