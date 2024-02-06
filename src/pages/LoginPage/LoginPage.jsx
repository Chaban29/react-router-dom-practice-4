import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.jsx/useAuth';

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { signIn } = useAuth();
  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className='page'>
      <div className='page'>Login Page {fromPage} </div>
      <form onSubmit={handleSubmitForm}>
        <label>
          Name: <input type='text' name='username' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
