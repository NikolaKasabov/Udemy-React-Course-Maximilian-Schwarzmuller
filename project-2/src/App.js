import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import Card from './components/Card';
import classes from './App.module.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });

  function handleChange(ev) {
    const { name, value } = ev.target;
    setFormData(old => ({
      ...old,
      [name]: value,
    }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    setUsers(old => ([
      { id: nanoid(), ...formData },
      ...old,
    ]));

    setFormData({
      name: '',
      age: '',
    });
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
    </div>
  );
}

export default App;
