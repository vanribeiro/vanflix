/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../PageDefault';
import ButtonAction from '../../Components/ButtonAction';
import Input from '../../Components/Input';
import FieldSet from '../../Components/FieldSet';
import TextArea from '../../Components/TextArea';
import Label from '../../Components/Label';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px 0 24px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
`;

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '#ffffff',
  };

  const [categories, setCategory] = useState([]);
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handlerChange = (event) => {
    setValue(event.target.getAttribute('name'), event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory([
      ...categories, values,
    ]);
    setValues(initialValues);
  };

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.name}
        </h1>
        <Form onSubmit={handleSubmit}>
          <FieldSet>
            <Label htmlFor="category">
              Nome da Categoria:
            </Label>
            <Input
              type="text"
              value={values.name}
              name="name"
              onChange={handlerChange}
              id="category"
              placeholder="Categoria"
            />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="description">
              Descrição:
            </Label>
            <TextArea
              value={values.description}
              name="description"
              onChange={handlerChange}
              id="description"
              placeholder="Descrição"
            />
          </FieldSet>
          <FieldSet>
            <Label htmlFor="color-category">
              Cor:
            </Label>
            <Input
              type="color"
              value={values.color}
              name="color"
              onChange={handlerChange}
              id="color-category"
              inputcolor
            />
          </FieldSet>
          <ButtonContainer>
            <ButtonAction>
              Cadastrar
            </ButtonAction>
          </ButtonContainer>
        </Form>
        <ul>
          {categories.map((categoria, indice) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${categoria}${indice}`}>
              {categoria.name}
            </li>
          ))}
        </ul>
        <Link to="/">Ir para Home</Link>
      </PageDefault>
    </>
  );
};

export default CadastroCategoria;
