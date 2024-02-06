import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const EditTodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBackPage = () => navigate(-1);
  return (
    <div className='page'>
      <div>Edit Todo {id}</div>
      <button onClick={goBackPage}>Go back</button>
    </div>
  );
};
