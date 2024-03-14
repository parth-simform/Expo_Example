import axios from 'axios';
import { url } from './config';
import { useQuery } from 'react-query';

const useEmployeeList = () => {

    const getEmployeeList = async () => {
        const { data } = await axios.get(url)
        return data
    }
    return useQuery({ queryKey: "employee", queryFn: getEmployeeList, staleTime: 4000 })
}

export default useEmployeeList;