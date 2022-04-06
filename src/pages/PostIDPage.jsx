import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/postServise';
import Loader from '../components/UI/loader/Loader';

const PostIDPage = () => {
   const params = useParams();
   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);
   const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id)
      setPost(response.data)
   })

   const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id)
      setComments(response.data)
   })


   useEffect(() => {
      fetchPostsById(params.id)
      fetchComments(params.id)
   }, [])

   return (
      <div>
         <h1>Вы открыли страницу поста {params.id}</h1>
         {isLoading
            ? <Loader /> : <div>{post.id}. {post.title} </div>}
         <h1>Комментарии</h1>
         {isLoading
            ? <Loader /> : <div>{comments.map(comm => 
               <div style={{marginTop: 15}}>
                  <h5>{comm.email}</h5>
                  <div>{comm.body}</div>
               </div>
            )} </div>}
      </div>
   );
};

export default PostIDPage;