import React, { useState } from 'react'
import styles from '../../styles/Product.module.css';
import { Select, Button } from 'antd';
import Image from 'next/image';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from 'next/router';
import Notification from '../../components/Notification'
import { addItem } from '../../store/actions/shopping-cart';
import TruckIcon from '../../components/Icons/TruckIcon';
import Layout from '../../components/layout/Layout';
import * as Mask from '../../utils/masks'
import Service from '../../services';
import Currency from '../../components/Currency';

const { Option } = Select;

const Product = ({ addItem, product, items }) => {
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(product?.main_image);
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = product?.stock > 6 ? 6 : product?.stock;

  return (
    <Layout>
      <main className={styles.wrapperContent}>
        <div className={styles.productImages}>
          { product?.images.map(image => {
            return (
              <Image
                onClick={() => handleChangeImage(`http://localhost:4000/${image.name}`, setCurrentImage)}
                key={image?.id}
                src={`http://localhost:4000/${image.name}`}
                width={35}
                height={50} />
            )
          }) }
        </div>

        <div className={styles.productImageShowing}>
          <Image
            src={currentImage}
            width={135}
            height={240} />
        </div>

        <div className={styles.productDetails}>
          <h1>{ product?.name }</h1>

          <h2>
            <Currency value={ product?.value?.toString() } />
          </h2>
          <p>em 12x <span style={{ marginLeft: 6 }}> { Mask.plots(product?.value) } sem juros</span></p>

          <p>
            <TruckIcon />
            <span>Chegará em até 3 dias úteis</span>
          </p>

          <p>Estoque disponível</p>

          <div className={styles.wrapperQuantitySelected}>
            <span>Quantidade</span>

            <Select
              className={styles.quantitySelected}
              style={{ width: 130 }}
              value={ quantity }
              onChange={ (value) => setQuantity(value) }>
              { Array.apply(1, Array(maxQuantity)).map((_ , index) => {
                return (
                  <Option key={index+1} value={index+1}>{index+1} unidade</Option>
                )
              })}
            </Select>

            <span>({ product?.stock } disponíveis)</span>
          </div>

          <Button
            loading={loading}
            className={styles.primaryButton}
            onClick={() => addItemToShoppingCart(addItem, product, quantity, items, setLoading)}>
            Adicionar ao carrinho
          </Button>
        </div>
      </main>
    </Layout>
  )
};

// Handle functions
const addItemToShoppingCart = async (action, product, quantity, items, setLoading) => {
  // init loading to button
  setLoading(true);

  // Get quantity product in shopping cart
  const itemInShoppingCart = getItemInShoppingCart(product, items) || { quantity: 0 };

  // Verify product stock
  // const productRefreshed = await Service.Products.findById(3);
  //
  // if (productRefreshed?.stock < (quantity + itemInShoppingCart?.quantity)) {
  //   Notification('error', 'Esse produto não está mais disponível');
  //
  //   setLoading(false);
  // }
  // else {
    // Store item to shopping cart
    action(product, quantity);

    // await redirect to home page
    await Router.push('/');

    // Notification user of success action
    Notification('success', 'Item adicionado ao carrinho com sucesso!');
  // }
};

const getItemInShoppingCart = (product, items) => {
  return items.find(item => {
    if (item.product.id === product.id) {
      return item;
    }
  });
};

const handleChangeImage = (image, setImageAction) => {
  setImageAction(image);
};

// Actions page
export async function getStaticPaths() {
  const products = await Service.Products.findAll();

  return {
    paths: products?.map(product => {
      return {
        params: {
          id: product?.id
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await Service.Products.findById(params?.id);

  return {
    props: {
      product
    }
  }
}

// Redux connection
const mapStateToProps = ({ shoppingCart }) => {
  return {
    items: shoppingCart?.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: bindActionCreators(addItem, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
