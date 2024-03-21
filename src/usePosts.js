import { useInfiniteQuery, useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async ({pageParam = 1}) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _page: pageParam
        }
    });
    return data;
};

// const usePosts = () => useQuery('posts', fetchPosts);
const usePosts = () => useInfiniteQuery({
    queryKey: 'posts',
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, allPage) => {
        if (lastPage?.length === 0) return undefined
        return allPage?.length + 1
    }
});

export default usePosts;