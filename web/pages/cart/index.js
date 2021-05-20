import React, { Component } from 'react';
import styles from '../../styles/Cart.module.css'
import {Row, Button, Spin} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ProductItem from '../../components/product-item/ProductItem';
import {clear, decrementItem, fetchItems, incrementItem, removeItem} from '../../store/actions/shopping-cart';
import Currency from '../../components/Currency';
import Checkout from '../../components/checkout/Checkout';
import Layout from '../../components/layout/Layout';
import Notification from '../../components/Notification';
import Service from '../../services';
import Router from 'next/router';
import ShoppingCartEmpty from '../../components/ShoppingCartEmpty';

class Cart extends Component {
  state = {
    modal: {
      visible: false,
      loading: false
    },
    loading: false
  };

  handleIncrement = async (count, setCount, item) => {
    const { incrementItem } = this.props;
    const { product } = item;

    this.setState({ loading: true }, async () => {
      const stock = await Service.Products.getStock(product.id);

      if (stock <= count) {
        Notification('error', 'Esse produto não está mais disponível');
      }
      else {
        setCount(++count);
        incrementItem(item);
      }

      this.setState({ loading: false })
    })
  };

  handleDecrement = (count, setCount, item) => {
    const { decrementItem } = this.props;

    this.setState({ loading: true }, () => {
      setCount(--count);

      decrementItem(item);

      this.setState({ loading: false })
    })
  };

  handleTotalValueItems = (items) => {
    let total = 0;

    items.forEach((item) => {
      const { product } = item;

      total += product?.value * item.quantity
    });

    return total.toString();
  };

  handleSubmit = async (values) => {
    const { items, clearShoppingCart } = this.props;
    const { modal } = this.state;

    if (this.handleCheckCreditCardValid(values)) {
      this.setState({ modal: { ...this.state.modal, loading: true } }, async () => {
        // Store order of products
        await Service.Orders.addOrders(this.handleFormatItemsToCreateOrder(items));

        // Clear shopping cart
        clearShoppingCart();

        // hide modal
        this.hideModal();

        // Notification user of success action
        Notification('success', 'Compra realizada com sucesso!');

        // Redirect to home page
        await Router.push('/');
      });
    }
    else if(this.handleCheckCreditCardInvalid(values)) {
      Notification('error', 'Compra infelizmente foi recusada!');
    }
    else {
      Notification('error', 'Cartão inválido!');
    }
  };

  handleCheckCreditCardValid = (values) => {
    const { card_number, security_code } = values;

    if (card_number !== '5121 2621 8081 4518') return false;

    return security_code === '703';
  };

  handleCheckCreditCardInvalid = (values) => {
    const {card_number, security_code} = values;

    if (card_number !== '5272 9447 7610 8184') return false;

    return security_code === '742';
  };

  handleFormatItemsToCreateOrder = (items) => {
    let dataOrder = {
      quantity: '',
      productIds: ''
    };

    items.forEach(item => {
      dataOrder.quantity = `${dataOrder.quantity},${item.quantity}`;
      dataOrder.productIds = `${dataOrder.productIds},${item.product.id}`;
    });

    return {
      quantity: dataOrder.quantity.substring(1),
      productIds: dataOrder.productIds.substring(1),
    };
  };

  handleRemove = (removeItemAction, item) => {
    removeItemAction(item);
  };

  showModal = () => {
    this.setState({
      modal: {
        ...this.state.modal,
        visible: true
      }
    })
  };

  hideModal = () => {
    this.setState({
      modal: {
        loading: false,
        visible: false
      }
    })
  };

  render() {
    const { loading, modal } = this.state;
    const { items, removeItem } = this.props;

    return (
      <Layout cart>
        <main className={styles.wrapperContent}>
          <div className={styles.wrapperTitle}>
            <h1>
              <ShoppingCartOutlined />
              Carrinho
            </h1>
          </div>

          <Spin spinning={loading}>
          { items.length > 0 &&
            <>
              <div />
              { items.map(item => {
                return (
                  <ProductItem
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    item={item}
                    removeItem={() => this.handleRemove(removeItem, item)} />
                )
              }) }

              <Row type='flex' justify='end' style={{ borderBottom: '1px solid #EAEAEA' }}>
                <div className={styles.wrapperTotal}>
                  <h3>Total com frete</h3>

                  <div className={styles.wrapperTotalValue}>
                    <Currency value={ this.handleTotalValueItems(items) }/>
                    <p>em <span>12x sem juros</span></p>
                  </div>

                </div>
              </Row>

              <Row type='flex' justify='end'>
                <Button className={styles.primaryButton} onClick={() => this.showModal()}>
                  Continuar a compra
                </Button>
              </Row>
            </>
          }

          { items.length <= 0 &&
            <ShoppingCartEmpty />
          }
          </Spin>
        </main>

        <Checkout
          visible={modal.visible}
          handleSubmit={this.handleSubmit}
          handleCancel={this.hideModal}/>
      </Layout>
    )
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
    fetchItems: bindActionCreators(fetchItems, dispatch),
    removeItem: bindActionCreators(removeItem, dispatch),
    incrementItem: bindActionCreators(incrementItem, dispatch),
    decrementItem: bindActionCreators(decrementItem, dispatch),
    clearShoppingCart: bindActionCreators(clear, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
