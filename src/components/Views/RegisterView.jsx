import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import css from './page-css/RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>User registration</h2>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          E-mail:
          <input
            className={css.input}
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password:
          <input
            className={css.input}
            type="password"
            name="password"
            pattern=".{5,}"
            title="Password must be at least five characters long"
            required
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={css.button} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}