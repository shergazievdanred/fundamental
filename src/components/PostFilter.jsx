import React from 'react';
import MyInput from './UI/input/MyInput';
import Select from './UI/select/Select';

const PostFilter = ({filter, setFilter}) => {
   return (
      <div>
         <MyInput
            value={filter.query}
               onChange={e => setFilter({ ...filter, query: e.target.value })}
            placeholder="Идет поиск..."/>
         <Select
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка"
            options={[
               {value: 'title', name: 'по названию'},
               {value: 'body', name: 'по описанию'},
            ]}
         />  
      </div>
   );
};

export default PostFilter;