import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Badge } from 'antd';
import { fetchItems } from '../store/actions/shopping-cart';
import { ShoppingCartOutlined } from '@ant-design/icons';

const ShoppingCart = React.forwardRef(function CustomComponent({ items }, _) {
  return (
    <Badge count={items} offset={[0, 20]}>
      <ShoppingCartOutlined />
    </Badge>
  );
});

const mapStateToProps = ({ shoppingCart }) => {
  const data = shoppingCart?.items;
  const count = data?.length && data.map((item) => item.quantity).reduce((item, current) => item + current);

  return {
    items: count
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: bindActionCreators(fetchItems, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
