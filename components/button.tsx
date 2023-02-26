import styles from '../styles/button.module.css';

function Button(props:any) {
  return (
    <button className={styles.button} onClick={props.work}> 
   {props.value}
    </button>
  );
}

export default Button;
