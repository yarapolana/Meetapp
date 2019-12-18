import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import { Section, Input } from '~/components/Layout';
import Button from '~/components/Button';

const SignIn = ({ navigation }) => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = () => {
    if (!email || !password) {
      setError('This field cannot be empty');
      setEmail('');
      setPassword('');
    }

    if (!error) {
      dispatch(signInRequest(email, password));
    }
  };

  if (error) {
    setTimeout(() => {
      setError();
    }, 3000);
  }

  return (
    <Section session>
      <Input
        value={email}
        placeholder="Email"
        error={error}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Input
        value={password}
        placeholder="Password"
        error={error}
        ref={passwordRef}
        secureTextEntry
        autoCorrect={false}
        returnKeyType="send"
        keyboardType="email-address"
        onChangeText={setPassword}
        onSubmitEditing={handleSubmit}
      />
      <Button primary go={handleSubmit} loading={loading}>
        Login
      </Button>
      <Button go={() => navigation.navigate('SignUp')}>
        Create free Account
      </Button>
    </Section>
  );
};

export default SignIn;

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
