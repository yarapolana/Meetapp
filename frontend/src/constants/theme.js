import React from 'react';
import { darken } from 'polished';

import {
  MdAddCircleOutline,
  MdDeleteForever,
  MdChevronRight,
  MdEdit,
  MdCameraAlt,
  MdEvent,
  MdPlace,
  MdAddAPhoto,
} from 'react-icons/md';

export const theme = {
  color: {
    primary: '#F94D6A',
    secondary: '#',
    accent: '#4DBAF9',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    gradient: 'linear-gradient(180deg, #22202C 0%, #402845 100%);',
    hover: darken(0.05, '#f94d6a'),
  },

  size: {
    small: 24,
    medium: 30,
    big: 54,
    body: 18,
  },
};

export const icons = {
  chevronRightIcon: (
    <MdChevronRight color={theme.color.white} size={theme.size.small} />
  ),
  addIcon: (
    <MdAddCircleOutline color={theme.color.white} size={theme.size.small} />
  ),
  deleteIcon: (
    <MdDeleteForever color={theme.color.white} size={theme.size.small} />
  ),
  editIcon: <MdEdit color={theme.color.white} size={theme.size.small} />,
  cameraIcon: <MdCameraAlt color={theme.color.white} size={theme.size.big} />,
  addCameraIcon: (
    <MdAddAPhoto color={theme.color.white} size={theme.size.big} />
  ),
  eventIcon: <MdEvent color={theme.color.white} size={theme.size.small - 4} />,
  placeIcon: <MdPlace color={theme.color.white} size={theme.size.small - 4} />,
};
