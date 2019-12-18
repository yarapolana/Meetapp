import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Logo = props => {
  return (
    <Svg width={41} height={42} {...props}>
      <Path
        d="M35.143 0H41v42h-6.33V9.32L21.13 25.555h-1.165L6.298 9.32V42H0V0h5.92l14.643 17.257z"
        fill="#F94D6A"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default Logo;
