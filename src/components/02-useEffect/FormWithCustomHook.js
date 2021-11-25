import React from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';
const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FormValues :>> ', formValues);
  };
  // const handleInputChange = ({ target }) => {
  //   setFormState({ ...formState, [target.name]: target.value });
  // };
  return (
    <form onSubmit={handleSubmit}>
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
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="********"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default FormWithCustomHook;
