/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../PageDefault';
import ButtonAction from '../../Components/ButtonAction';
import FormFieldWrapper from '../../Components/FormFieldWrapper';

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

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://vanflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (serverAnswer) => {
        const awswer = await serverAnswer.json();
        setCategory([
          ...awswer,
        ]);
      });

    // setTimeout(() => {
    //   setCategory([
    //     ...categories,
    //     {
    //       id: 1,
    //       name: 'Front-End',
    //       description: 'A mistura de arte e técnica que tanto amamos! ❤️💙💛',
    //       color: '#eca769',
    //     },
    //     {
    //       id: 2,
    //       name: 'Arte',
    //       description: 'Técnicas de Arte!',
    //       color: '#eca769',
    //     },
    //     {
    //       id: 3,
    //       name: 'Comédia',
    //       description: 'Rir é Importante!',
    //       color: '#eca769',
    //     },
    //     {
    //       id: 4,
    //       name: 'Séries',
    //       description: 'Trailer e Curiosidades',
    //       color: '#eca769',
    //     },
    //     {
    //       id: 5,
    //       name: 'Filmes',
    //       description: 'Trailers de Filmes',
    //       color: '#eca769',
    //     },
    //   ]);
    // }, 4 * 1000);
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
            label="Nome da Categoria"
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
