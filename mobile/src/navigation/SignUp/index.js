import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';

import { Section, Input } from '~/components/Layout';
import Button from '~/components/Button';

const SignUp = ({ navigation }) => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = () => {
    if (!name || !email || !password) {
      setError('This field cannot be empty');
      setName('');
      setEmail('');
      setPassword('');
    }

    if (!error) {
      dispatch(signUpRequest(name, email, password));
    }
  };

  return (
    <Section session>
      <Input
        value={name}
        placeholder="Full name"
        error={error}
        autoCorrect={false}
        onChangeText={setName}
        onSubmitEditing={() => emailRef.current.focus()}
      />

      <Input
        value={email}
        placeholder="Email"
        error={error}
        ref={emailRef}
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
        Create Account
      </Button>
      <Button go={() => navigation.navigate('SignIn')}>
        Already have an account?
      </Button>
    </Section>
  );
};

export default SignUp;

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
