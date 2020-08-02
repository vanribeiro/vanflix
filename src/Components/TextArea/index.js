import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextAreaComponent = styled.textarea`
    resize: none;

    width: 100%;
    height: 100px;
    background-color: #53585D;
    border: none;
    color: #E5E5E5;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 40px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.125em;
    line-height: 21px;
    padding: 5px;
`;

const TextArea = ({
  value, name, onChange, id, placeholder,
}) => (
  <>
    <TextAreaComponent
      value={value}
      name={name}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
    />
  </>
);

TextArea.defaultProps = {
  value: '',
};

TextArea.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
