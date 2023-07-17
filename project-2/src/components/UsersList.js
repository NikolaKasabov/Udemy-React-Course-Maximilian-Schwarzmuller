import classes from './UsersList.module.css';

function UsersList({users}) {
  return (
    <ul className={classes.usersList}>
      {users.map(user => (
        <li key={user.id} className={classes.user}>{user.name} ({user.age} years old)</li>
      ))}
    </ul>
  );
}

export default UsersList;
