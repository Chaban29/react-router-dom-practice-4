import * as React from 'react';
import { NavLink, useAsyncValue, useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';

const TodoItem = () => {
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
            <TodoItem />
          </Await>
        </Suspense>
      </div>
      <NavLink id='link' to={`/blog/${id}/edit`}>
        Edit todo
      </NavLink>
    </div>
  );
};

async function getTodosById(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return result.json();
}



export const todoLoader = async ({ params }) => {
  const id = params.id;
  return { todo: getTodosById(id), id };
};
