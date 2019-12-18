import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { theme, icons } from 'constants/index';
import { Container, LinkContainer } from './styles';

const Button = ({
  icon,
  iconRight,
  form,
  chevronIcon,
  addIcon,
  deleteIcon,
  editIcon,
  primary,
  accent,
  children,
  go,
  to,
  link,
  top,
  ...props
}) => {
  const iconType = [
    chevronIcon && icons.chevronRightIcon,
    addIcon && icons.addIcon,
    deleteIcon && icons.deleteIcon,
    editIcon && icons.editIcon,
  ];

  const bg = [primary && theme.color.primary, accent && theme.color.accent];

  if (icon) {
    return (
      <Container bg={bg} {...props} onClick={go}>
        {iconType}
        <strong>{children}</strong>
      </Container>
    );
  }

  if (iconRight) {
    return (
      <Link to={to}>
        <Container bg={bg} {...props}>
          {children}
          {iconType}
        </Container>
      </Link>
    );
  }

  if (form) {
    return (
      <Container bg={bg} {...props} type="submit">
        <strong>{children}</strong>
      </Container>
    );
  }

  if (link) {
    return (
      <LinkContainer top={top}>
        <Link to={to}>{children}</Link>
      </LinkContainer>
    );
  }

  return (
    <Container bg={bg} {...props} onClick={go}>
      <strong>{children}</strong>
    </Container>
  );
};

Button.propTypes = {
  form: PropTypes.bool,
  icon: PropTypes.bool,
  iconRight: PropTypes.bool,
  link: PropTypes.bool,
  chevronIcon: PropTypes.bool,
  addIcon: PropTypes.bool,
  deleteIcon: PropTypes.bool,
  editIcon: PropTypes.bool,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
  top: PropTypes.number,
  // to: PropTypes.string.isRequired,
  // go: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  form: false,
  icon: false,
  iconRight: false,
  link: false,
  chevronIcon: false,
  addIcon: false,
  deleteIcon: false,
  editIcon: false,
  primary: false,
  accent: false,
  top: 0,
};

export default Button;
