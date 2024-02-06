import * as React from 'react';
import { CustomLink } from '../CustomLink/CustomLink';

export const Header = () => {
  return (
    <header className='header'>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/about'>About</CustomLink>
      <CustomLink to='/blog'>Blog</CustomLink>
    </header>
  );
};
