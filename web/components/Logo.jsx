import React from 'react';
import Image from 'next/image';

const Logo = React.forwardRef(function CustomComponent(props, _) {
  return (
    <Image {...props} />
  );
});

export default Logo;
