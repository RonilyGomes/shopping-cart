import React from 'react';
import { money } from '../utils/masks'

const Currency = ({ value }) => {
  return (
    <span>
      { money(value) }
    </span>
  );
};

export default Currency;
