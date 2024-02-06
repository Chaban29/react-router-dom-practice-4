import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className='page'>
      <div>About Page</div>
      <ul>
        <li>
          {' '}
          <NavLink to='contacts'>Contacts</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to='team'>Team</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
