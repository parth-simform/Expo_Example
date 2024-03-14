import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'

const useGetPosts = () => {

    const fetData = async ({ pageParam = 1 }) => {

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: pageParam
            }
        })
        return data;
    }

    return useInfiniteQuery({
        queryKey: "post",
        queryFn: fetData,
        getNextPageParam: (lasePage, allPages) => {
            if (lasePage?.length === 0) return undefined

            return allPages.length + 1

        }
    })
}

export default useGetPosts;