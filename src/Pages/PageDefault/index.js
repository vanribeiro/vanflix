/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../../Components/Menu';
import Footer from '../../Components/Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 50px 5%;
`;

const PageDefault = ({ children }) => (
  <>
    <Menu />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

PageDefault.defaultProps = {
  children: '',
};

PageDefault.propTypes = {
  children: PropTypes.node,
};

export default PageDefault;
