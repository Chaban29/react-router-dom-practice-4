import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const LayoutPage = () => {
  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>&copy; 2024</footer>
    </div>
  );
};
