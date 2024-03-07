import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPost = async (postId) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return data;
};

const usePost = (postId) => useQuery(
    { queryKey: ['posts', postId],
    queryFn: () => fetchPost(postId) }
    );

export default usePost;