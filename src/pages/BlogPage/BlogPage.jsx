import * as React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlogFilter } from '../../components/BlogFilter/BlogFilter';

export const BlogPage = () => {
  const [todos, setTodos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('todo') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then((resultTodo) => resultTodo.json())
      .then((todoData) => setTodos(todoData));
  }, []);
  return (
    <div className='page'>
      <h1>Our Todo</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <NavLink id='link' to='/blog/new'>
        Add new todo
      </NavLink>
      <div className='todo__list'>
        {todos
          .filter(
            (todo) => todo.title.includes(postQuery) && todo.id >= startsFrom
          )
          .map((todo) => (
            <NavLink to={`/blog/${todo.id}`} id='link' key={todo.id}>
              {todo.title}
            </NavLink>
          ))}
      </div>
    </div>
  );
};
