
import axios from 'axios';
import { useQueryClient, useMutation } from 'react-query'
import { url } from './config';

const usePostEmployee = () => {
    const queryClient = useQueryClient()
    const addEmployee = async (employeeBody) => {
        // console.log(employeeBody, `${url}/add`);
        const { data } = await axios.post(url, employeeBody)
        console.log(data);

        return data
    }
    return useMutation({
        mutationFn: addEmployee,
        onSuccess: (newPost) => {
            // queryClient.invalidateQueries('employee')
            queryClient.setQueryData(['employee'], (oldPost)=> [...oldPost, newPost])
        }
    })
}

export default usePostEmployee;