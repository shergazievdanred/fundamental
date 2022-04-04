import React, { useState } from 'react';
import PostForm from './components/PostForm';

// import Counter from './components/Counter';
// import ClassCount from './components/ClassCounter'
// import Input from './components/Input';
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'React.js', body: 'Description' },
    { id: 2, title: 'java', body: 'Description' },
    { id: 3, title: 'cotlin', body: 'Description' },
    { id: 4, title: 'python', body: 'Description' },
    { id: 5, title: 'PHP', body: 'Description'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
        {/* <Input/>
        <Counter/>
        <ClassCount /> 
        <br/> */}
      <PostForm create={createPost} />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title="Стэк технологий" />
        : <h1
          style={{ textAlign: 'center' }}>
            Посты не найдены
        </h1>
      }
        
    </div>
  );
}

export default App;
