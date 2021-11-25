import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';
const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '' });
  const { name, email } = formState;
  useEffect(() => {
    // console.log('useEffect');
  }, []);
  useEffect(() => {
    // console.log('formState cambio');
  }, [formState]);
  useEffect(() => {
    // console.log('email cambio');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message />}
    </>
  );
};

export default SimpleForm;
