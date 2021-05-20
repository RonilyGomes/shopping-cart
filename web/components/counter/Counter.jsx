import React, { useState } from 'react';
import styles from './Counter.module.css';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const Counter = ({ item, handleIncrement, handleDecrement }) => {
  const [ count, setCount ] = useState(item.quantity);

  return (
    <div className={styles.wrapperCounter}>
      <MinusOutlined onClick={() => handleDecrement(count, setCount, item)} className={ count <= 1 ? 'disabled' : '' } />
      <span>
        { count }
      </span>
      <PlusOutlined onClick={() => handleIncrement(count, setCount, item)}/>
    </div>
  );
};

export default Counter;
