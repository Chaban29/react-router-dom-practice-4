import { NavLink, useMatch } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <NavLink to={to} {...props} style={{ color: match ? '#222' : '#fff' }}>
      {children}
    </NavLink>
  );
};
