import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const theme = {
  color: {
    primary: '#F94D6A',
    secondary: '#',
    accent: '#4DBAF9',
    error: '#FB6F9F',
    white: '#FFFFFF',
    faded: 'rgba(255, 255, 255, 0.6)',
    black: '#333333',
    header: '#191720',
    tabbar: '#2B1A2F',
  },

  size: {
    small: 24,
    medium: 30,
    big: 54,
    body: 18,
    caption: 13,
    smallIcon: 14,
    title: 20,
  },

  font: {
    regular: 400,
    bold: 700,
  },
};

export const icons = {
  dashboardIcon: (
    <Icon
      name="format-list-bulleted"
      color={theme.color.white}
      size={theme.size.small}
    />
  ),
  subscriptionIcon: (
    <Icon
      name="local_offer"
      color={theme.color.white}
      size={theme.size.small}
    />
  ),
  profileIcon: (
    <Icon name="person" color={theme.color.white} size={theme.size.small} />
  ),
  organizerIcon: (
    <Icon
      name="assignment-ind"
      color={theme.color.white}
      size={theme.size.small}
    />
  ),
  eventIcon: (
    <Icon name="event" size={theme.size.smallIcon} color={theme.color.white} />
  ),
  placeIcon: (
    <Icon
      name="local_offer"
      color={theme.color.white}
      size={theme.size.smallIcon}
    />
  ),
};
