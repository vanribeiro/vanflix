/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../PageDefault';
import ButtonAction from '../../Components/ButtonAction';
import FormFieldWrapper from '../../Components/FormFieldWrapper';
import useForm from '../../Hooks/useform';
import URL_BACKEND from '../../Config';

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

  const { clearForm, values, handlerChange } = useForm(initialValues);

  const [categories, setCategory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory([
      ...categories, values,
    ]);
    clearForm();
  };

  useEffect(() => {
    fetch(URL_BACKEND)
      .then(async (serverAnswer) => {
        const awswer = await serverAnswer.json();
        setCategory([
          ...awswer,
        ]);
      });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {` ${values.name}`}
        </h1>
        <Form onSubmit={handleSubmit}>

          <FormFieldWrapper
            label="Título"
            type="text"
            value={values.name}
            name="name"
            onChange={handlerChange}
            id="category"
          />

          <FormFieldWrapper
            type="textarea"
            label="Descrição"
            value={values.description}
            name="description"
            onChange={handlerChange}
            id="description"
          />

          <FormFieldWrapper
            label="Cor"
            type="color"
            value={values.color}
            name="color"
            onChange={handlerChange}
            id="color-category"
            inputcolor
          />

          <ButtonContainer>
            <ButtonAction>
              Cadastrar
            </ButtonAction>
          </ButtonContainer>
        </Form>
        {categories.length === 0 && (
          <div>
            Carregando...
          </div>
        )}
        <ul>
          {categories.map((categoria, indice) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`${categoria}${indice}`}>
              {categoria.title}
            </li>
          ))}
        </ul>
        <Link to="/">Ir para Home</Link>
      </PageDefault>
    </>
  );
};

export default CadastroCategoria;
