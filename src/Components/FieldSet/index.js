import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
`;

const FieldSet = ({ children }) => (
  <>
    <Fieldset>
      {children}
    </Fieldset>
  </>
);

FieldSet.defaultProps = {
  children: '',
};

FieldSet.propTypes = {
  children: PropTypes.node,
};

export default FieldSet;
