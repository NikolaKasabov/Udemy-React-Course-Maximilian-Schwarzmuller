import Card from './Card';
import classes from './Modal.module.css';

function Modal({message, onClose}) {
  return (
    <>
      <div className={classes.overlay} onClick={onClose}></div>
      <Card className={classes.contentCard}>
        <h4 className={classes.title}>Invalid Input</h4>
        <div className={classes.content}>{message}</div>
        <div className={classes.actions}>
          <button className={classes.button} onClick={onClose}>Okay</button>
        </div>
      </Card>
    </>
  );
}

export default Modal;
