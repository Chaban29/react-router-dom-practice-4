import * as React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SinglePage = (goBackPage) => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((resultTodo) => resultTodo.json())
      .then((todoData) => setTodo(todoData));
  }, [id]);

  return (
    <div className='page'>
      <div id='top'>Todo Item №{id}</div>
      <div className='todo__block'>
        {todo && (
          <>
            <h4>{todo.title}</h4>
          </>
        )}
      </div>
      <NavLink id='link' to={`/blog/${id}/edit`}>
        Edit todo
      </NavLink>
    </div>
  );
};
