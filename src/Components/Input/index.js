import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputTag = styled.input`
    width: 100%;
    background-color: #53585D;
    border: none;
    color: #E5E5E5;
    height: 50px;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.125em;
    line-height: 21px;
    padding: ${(inputcolor) => (inputcolor ? '16px' : '5px')};
`;

const Input = ({
  type, id, placeholder, name, value, onChange, inputcolor,
}) => (
  <>
    <InputTag
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      inputcolor={inputcolor}
    />
  </>
);

Input.defaultProps = {
  type: 'text',
  placeholder: 'text',
  value: '',
  inputcolor: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputcolor: PropTypes.string,
};

export default Input;
