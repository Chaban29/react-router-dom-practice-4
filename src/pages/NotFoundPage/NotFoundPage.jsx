import * as React from 'react';
import { useRouteError } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const NotFoundPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Header />
      <div className='page'>
        <h1>Oops!</h1>
        <p>This page is not defined</p>
        <i>{error.statusText ?? error.message}</i>
      </div>
    </div>
  );
};
