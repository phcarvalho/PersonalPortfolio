import React from 'react';

import { Container } from './styles';

import Social from '../Social';

function Footer({ social }) {
  return (
    <Container>
      <Social social={social} />
    </Container>
  );
}

export default Footer;