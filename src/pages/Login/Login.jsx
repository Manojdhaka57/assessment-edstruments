import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button } from '../../styles/GlobalStyles';
import { LoginContainer, StyledLoginForm } from './Login.styled';
import { useAuth } from '../../providers/AuthProvider.jsx';

const Login = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      // Simulate login (replace this with actual API call)
      if (values.username === 'admin' && values.password === 'password') {
        login(values);
      } else {
        alert('Invalid username or password');
      }
    },
  });

  return (
    <StyledLoginForm>
      <LoginContainer>
        <form onSubmit={formik.handleSubmit}>
          <h2>Login</h2>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              id='username'
              name='username'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.username}
              autoComplete='off'
            />
            {formik.errors.username && (
              <div className='error-message'>{formik.errors.username}</div>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              name='password'
              type='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              autoComplete='off'
            />
            {formik.errors.password && (
              <div className='error-message'>{formik.errors.password}</div>
            )}
          </div>
          <Button className='secondary-btn' type='submit'>
            Login
          </Button>
        </form>
      </LoginContainer>
    </StyledLoginForm>
  );
};

export default Login;
