import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../PageDefault';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px 0 24px 0;
`;

const CadastroVideo = () => {
    return(
        <React.Fragment>
            <PageDefault>
                <h1>Cadastro de Vídeo</h1>
                <Form>
                    <Link to="/cadastro/categoria"> Cadastrar Categoria</Link>
                </Form>
                <Link to="/">Ir para Home</Link>
            </PageDefault>
        </React.Fragment>
    )
}

export default CadastroVideo;