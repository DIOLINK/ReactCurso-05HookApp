import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Home</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomePage;
