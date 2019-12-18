import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { Section, Input, Line } from '~/components/Layout';
import Button from '~/components/Button';
import { theme } from '~/constants';

const Profile = () => {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.auth.loading);

  const emailRef = useRef();
  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }, [profile]);

  const handleSubmit = () => {
    const data = {
      email,
      password,
      newPassword,
      confirmPassword,
    };

    dispatch(updateProfileRequest(data));
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Section>
      <Input
        value={name}
        placeholder="Full Name"
        autoCorrect={false}
        returnKeyType="next"
        onChangeText={setName}
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <Input
        value={email}
        placeholder="Email"
        ref={emailRef}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={setEmail}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Line />
      <Input
        value={password}
        placeholder="Password"
        ref={passwordRef}
        secureTextEntry
        autoCorrect={false}
        returnKeyType="next"
        onChangeText={setPassword}
        onSubmitEditing={() => newPasswordRef.current.focus()}
      />
      <Input
        value={newPassword}
        placeholder="New Password"
        ref={newPasswordRef}
        secureTextEntry
        autoCorrect={false}
        returnKeyType="next"
        onChangeText={setNewPassword}
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
      />
      <Input
        value={confirmPassword}
        placeholder="Confirm Password"
        ref={confirmPasswordRef}
        secureTextEntry
        autoCorrect={false}
        returnKeyType="send"
        onChangeText={setConfirmPassword}
        onSubmitEditing={handleSubmit}
      />
      <Button primary go={handleSubmit} loading={loading}>
        Save
      </Button>
      <Button go={handleSignOut}>Sign Out</Button>
    </Section>
  );
};

Profile.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" color={tintColor} size={theme.size.small - 4} />
  ),
};

export default Profile;

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
