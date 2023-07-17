import React from 'react';
import Card from './components/Card';
import classes from './App.module.css';
import AddUser from './components/AddUser';

function App() {
  return (
    <div>
      <Card className={classes.formCard}>
        <AddUser />
      </Card>
    </div>
  );
}

export default App;
