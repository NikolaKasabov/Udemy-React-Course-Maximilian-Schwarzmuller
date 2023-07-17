import React, { useState } from 'react';

import Card from './components/Card';
import classes from './App.module.css';
import AddUser from './components/AddUser';

function App() {
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
    </div>
  );
}

export default App;
