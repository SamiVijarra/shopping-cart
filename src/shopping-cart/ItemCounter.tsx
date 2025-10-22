import { useState } from "react";
/*import './ItemCounter.css'*/
import styles from './ItemCounter.module.css';

interface Props {
  name: string;
  quantity?: number;
};



export const ItemCounter = ({ name, quantity =1}: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () =>{setCount(prevCount => prevCount + 1);}
  const handleSubtract = () =>{setCount (prevCount => Math.max(prevCount - 1, 0));}

  /*const handleClick = () => {
    console.log(`Click en ${name}`);
  }*/
  return (
    < section className={ styles['item-row']}
      /*style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 10,
    }}*/>
      <span
        className={styles['item-text']}
        style={{
        /*width: 150,*/
        color: count == 1 ? 'red' : 'black'
      }}>
        {name}
      </span>
      <button
        onClick={handleAdd}>+1</button>
      <span >{count}</span>
      <button
      onClick={handleSubtract}>-1</button>
    </section>
  )
}
