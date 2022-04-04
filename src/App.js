import React, { useState } from 'react';
import PostForm from './components/PostForm';

// import Counter from './components/Counter';
// import ClassCount from './components/ClassCounter'
// import Input from './components/Input';
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
import Select from './components/UI/select/Select';
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'React.js', body: 'Description' },
    { id: 2, title: 'java', body: '2Description' },
    { id: 3, title: 'cotlin', body: '5Description' },
    { id: 4, title: 'python', body: '20Description' },
    { id: 5, title: 'PHP', body: '1Description'}
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
        {/* <Input/>
        <Counter/>
        <ClassCount /> 
        <br/> */}
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'по названию'},
            {value: 'body', name: 'по описанию'},
          ]}
        />
      </div>
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
