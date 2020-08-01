import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../PageDefault';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px 0 24px 0;
`;

const CadastroVideo = () => (
  <>
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>
      <Form>
        <Link to="/cadastro/categoria"> Cadastrar Categoria</Link>
      </Form>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  </>
);

export default CadastroVideo;
