import * as React from 'react';
import { useAuth } from '../../hooks/useAuth.jsx/useAuth';
import { useNavigate } from 'react-router-dom';

export const CreateTodoPage = () => {
  const navigate = useNavigate();

  const goBackPage = () => navigate(-2);

  const { signOut } = useAuth();

  return (
    <div className='page'>
      <div>Create Todo</div>
      <button onClick={goBackPage}>Go back</button>
      <button onClick={() => signOut(() => navigate('/', { replace: true }))}>
        Log out
      </button>
    </div>
  );
};
