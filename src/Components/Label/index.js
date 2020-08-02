import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelTag = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0%;
  left: 16px;

  display:flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

LabelTag.Text = styled.span``;

const Label = ({ htmlFor, label }) => (
  <>
    <LabelTag
      htmlFor={htmlFor}
    >
      {label}
    </LabelTag>
  </>
);

Label.defaultProps = {
  label: '',
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Label;
