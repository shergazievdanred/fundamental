import React from 'react';
import Posts from './Posts';

const PostList = ({posts, title}) => {
   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>
            {title}
         </h1>
         {posts.map((post) => 
            <Posts post={post} key={post.id}/>
         )}
      </div>
   );
};

export default PostList;