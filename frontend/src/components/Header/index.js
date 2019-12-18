import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from 'store/modules/auth/actions';

import { Container, Nav, Profile } from './styles';
import Button from '../Button';
import Logo from '../Layout/logo';

const Header = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Logo />
      <Nav>
        <Profile>
          <Button link to="/profile">
            <strong>{profile.name}</strong>
          </Button>
          <span>My profile</span>
        </Profile>
        <Button primary t={16} go={handleSignOut}>
          <span>Sign out</span>
        </Button>
      </Nav>
    </Container>
  );
};

export default Header;
