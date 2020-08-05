import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../PageDefault';
import FormFieldWrapper from '../../Components/FormFieldWrapper';
import useForm from '../../Hooks/useform';
import ButtonAction from '../../Components/ButtonAction';
import videosRepository from '../../Repositories/videos';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px 0 24px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

/**
 * Parei vídeo aula em 01:01:35
 */

const CadastroVideo = () => {
  const history = useHistory();
  const { handlerChange, values } = useForm({
    title: 'Vídeo Padrão',
    url: 'https://youtu.be/hhQ3RtvmfEg',
    category: 'Front-End',
  });
  return (
    <>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>
        <Form onSubmit={(event) => {
          event.preventDefault();
          // alert('Video Cadastrado com Sucesso!');
          videosRepository.createVideo({
            title: values.title,
            url: values.url,
            categoryId: 1,
          })
            .then(() => {
              console.log('Cadastrou com Sucesso');
              history.push('/');
            });
        }}
        >
          <FormFieldWrapper
            label="Título do Vídeo"
            type="text"
            value={values.title}
            name="title"
            onChange={handlerChange}
            id="video-title"
          />

          <FormFieldWrapper
            label="Link"
            type="text"
            value={values.url}
            name="url"
            onChange={handlerChange}
            id="url-video"
          />

          <FormFieldWrapper
            label="Categoria"
            type="text"
            value={values.category}
            name="category"
            onChange={handlerChange}
            id="category"
          />

          <ButtonContainer>
            <ButtonAction type="submit">
              Cadastrar
            </ButtonAction>
          </ButtonContainer>
          <Link to="/cadastro/categoria">
            Cadastrar Categoria
          </Link>
        </Form>
        <Link to="/">Ir para Home</Link>
      </PageDefault>
    </>
  );
};

export default CadastroVideo;
