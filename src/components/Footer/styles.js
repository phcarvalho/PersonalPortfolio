import styled from 'styled-components'

import colors from '../../configs/colors'

export const Container = styled.footer`
  display: none;

  background: ${colors.detailBackground};

  padding: 10px;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`
