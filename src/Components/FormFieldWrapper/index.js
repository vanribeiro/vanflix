import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label``;

const FormFieldWrapper = styled.div`
    position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 56px;
  position: absolute;
  top: 0;
  left: 16px;

  display:flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.125em;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 56px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  
  padding: ${(inputcolor) => (inputcolor ? '16px' : '5px')};
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .5s;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 1.125em;
  line-height: 21px;
  

    &:focus{
      border-bottom-color: var(--primary);
    }

    &:focus:not([type='color']) + span {
      transform: scale(.6) translateY(-10px);
    }

  ${({ hasValue }) => hasValue && css`
      &:not([type='color']) + span {
        transform: scale(.6) translateY(-10px);
      }
    `}
`;

const FormField = ({
  type, id, name, value, onChange, inputcolor, label, suggestions,
}) => {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestion = Boolean(suggestions.length);

  return (
    <>
      <FormFieldWrapper>
        <Label
          htmlFor={fieldId}
        >
          <Input
            as={tag}
            hasValue={hasValue}
            type={type}
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            inputcolor={inputcolor}
            autoComplete={hasSuggestion ? 'off' : 'on'}
            list={hasSuggestion ? `suggestionFor_${fieldId}` : 'on'}
          />
          <Label.Text>
            {label}
            :
          </Label.Text>
          {
            hasSuggestion && (
              <datalist id={`suggestionFor_${fieldId}`}>
                {
                  suggestions.map((suggestion) => (
                    <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                      {suggestion}
                    </option>
                  ))
                }
              </datalist>
            )
          }
        </Label>
      </FormFieldWrapper>
    </>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  inputcolor: PropTypes.bool,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
