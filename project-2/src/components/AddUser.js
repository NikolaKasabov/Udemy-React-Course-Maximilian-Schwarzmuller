import classes from './AddUser.module.css';
import Button from './Button';

function AddUser({values, onChange, onSubmit}) {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.formControl}>
        <label htmlFor="name">Username</label>
        <input type="text" id='name' name='name' value={values?.name} onChange={onChange} />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id='age' name='age' value={values?.age} onChange={onChange} />
      </div>
      <div className={classes.actions}>
        <Button onClick={onSubmit}>Add User</Button>
      </div>
    </form>
  );
}

export default AddUser;
