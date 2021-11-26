import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  const user = { id: new Date().getTime(), name: 'John Doe' };
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(user)}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
