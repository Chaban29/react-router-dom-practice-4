import * as React from 'react';
import {
  Await,
  NavLink,
  useLoaderData,
  useSearchParams,
  defer,
} from 'react-router-dom';
import { BlogFilter } from '../../components/BlogFilter/BlogFilter';
import { Suspense } from 'react';

export const BlogPage = () => {
  const { todos } = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('todo') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

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
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={todos}>
            {(resolvedTodos) => (
              <>
                {resolvedTodos &&
                  resolvedTodos
                    .filter(
                      (todo) =>
                        todo.title.includes(postQuery) && todo.id >= startsFrom
                    )
                    .map((todo) => (
                      <NavLink to={`/blog/${todo.id}`} id='link' key={todo.id}>
                        {todo.title}
                      </NavLink>
                    ))}
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

async function getTodos() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos');
  return result.json();
}

export const blogLoader = async () => {
  return defer({
    todos: getTodos(),
  });
};
