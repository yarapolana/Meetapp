import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="Meetapp" />
      </Link>
    </>
  );
};

export default Logo;
