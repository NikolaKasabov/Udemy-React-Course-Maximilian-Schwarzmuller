import classes from './AddUser.module.css';

function AddUser({values, onChange, onSubmit}) {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.formControl}>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' name='username' value={values?.username} onChange={onChange} />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id='age' name='age' value={values?.age} onChange={onChange} />
      </div>
      <div className={classes.actions}>
        <button type='submit' className={classes.button}>Add User</button>
      </div>
    </form>
  );
}

export default AddUser;
