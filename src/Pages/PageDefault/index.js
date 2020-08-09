/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

PageDefault.defaultProps = {
  children: '',
  paddingAll: '',
};

PageDefault.propTypes = {
  children: PropTypes.node,
  paddingAll: PropTypes.string,
};

export default PageDefault;
