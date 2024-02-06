import * as React from 'react';
import { useRouteError } from 'react-router-dom';

export const NotFoundPage = () => {
  const error = useRouteError();
  return (
    <div className='page'>
      <h1>Oops!</h1>
      <p>This page is not defined</p>
      <i>{error.statusText ?? error.message}</i>
    </div>
  );
};
