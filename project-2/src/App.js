import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Card from './components/Card';
import classes from './App.module.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import Modal from './components/Modal';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });
  const [error, setError] = useState('');

  function handleChange(ev) {
    const { name, value } = ev.target;
    setFormData(old => ({
      ...old,
      [name]: value,
    }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    if (!formData.name || !formData.age) {
      setError('Please enter a valid name and age (non-empty values).');
      return;
    }

    if (+formData.age < 1) {
      setError('Please enter a valid age (> 0).');
      return;
    }

    setUsers(old => ([
      { id: nanoid(), ...formData },
      ...old,
    ]));

    setFormData({
      name: '',
      age: '',
    });
  }

  function handleModalClose() {
    setError('');
  }

  return (
    <div>
      <Card className={classes.formCard}>
        <AddUser
          values={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Card>

      {users.length > 0 && (
        <Card className={classes.usersCard}>
          <UsersList users={users} />
        </Card>
      )}

      {error && <Modal message={error} onClose={handleModalClose} />}
    </div>
  );
}

export default App;
