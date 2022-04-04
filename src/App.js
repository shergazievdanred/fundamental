import React, { useState } from 'react';

// import Counter from './components/Counter';
// import ClassCount from './components/ClassCounter'
// import Input from './components/Input';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'React.js', body: 'Description' },
    { id: 2, title: 'java', body: 'Description' },
    { id: 3, title: 'cotlin', body: 'Description' }
  ])

  const [posts2, setPosts1] = useState([
    { id: 1, title: 'python', body: 'Description' },
    { id: 2, title: 'PHP', body: 'Description'}
  ])

  return (
    <div className="App">
        {/* <Input/>
        <Counter/>
        <ClassCount /> 
        <br/> */}

        <form>
          <MyInput type="text" placeholder="Название поста"/>
          <MyInput type="text" placeholder="Описание поста" />
          <MyButton disabled>Создать пост</MyButton>
        </form>

        <PostList posts={posts} title="Стэк 1" />
        <PostList posts={posts2} title="Стэк 2"/>
    </div>
  );
}

export default App;
