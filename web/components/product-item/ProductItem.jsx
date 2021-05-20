import React from 'react';
import { Row } from 'antd';
import Image from 'next/image';
import styles from './ProductItem.module.css';
import Counter from '../counter/Counter';
import Currency from '../Currency';

const ProductItem = ({ item, removeItem, handleIncrement, handleDecrement }) => {
  const { product } = item;

  return (
    <Row type='flex' justify='space-between' className={styles.wrapperContent}>
      <div className={styles.wrapperProduct}>
        <Image src={product?.main_image} width={50} height={90} />

        <h2>
          { product?.name }
        </h2>
      </div>

      <div className={styles.wrapperActions}>
        <Counter
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          item={item}/>

        <span onClick={() => removeItem()}>
          Excluir
        </span>
      </div>

      <div className={styles.WrapperSubTotal}>
        <Currency value={handleTotalValue(item)}/>
      </div>
    </Row>
  );
};

// Handle functions
const handleTotalValue = (item) => {
  const { product } = item;
  const total = product?.value * item.quantity;

  return total.toString();
};

export default ProductItem;
