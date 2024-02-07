import * as React from 'react';
import { NavLink, useLoaderData, Await, useAsyncValue } from 'react-router-dom';
import { Suspense } from 'react';

const Todo = () => {
  const todo = useAsyncValue();
  return <h4>{todo.title}</h4>;
};

export const SinglePage = () => {
  const { todo, id } = useLoaderData();
  return (
    <div className='page'>
      <div id='top'>Todo Item №{id}</div>
      <div className='todo__block'>
        <Suspense fallback={<h4>Loading...</h4>}>
          <Await resolve={todo}>
            <Todo />
          </Await>
        </Suspense>
      </div>
      <NavLink id='link' to={`/blog/${id}/edit`}>
        Edit todo
      </NavLink>
    </div>
  );
};

async function getTodoById(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return result.json();
}

export const todosLoader = async ({ params }) => {
  const id = params.id;

  return { id, todo: getTodoById(id) };
};
