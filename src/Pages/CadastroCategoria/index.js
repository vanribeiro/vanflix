import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from './../PageDefault';
import ButtonAction from './../../Components/ButtonAction';
import Input from './../../Components/Input';
import styled from 'styled-components';

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
    return(
        <React.Fragment>
            <PageDefault>
                <h1>Cadastro de Categoria</h1>
                <Form>
                    <label htmlFor="category">
                        Nome da Categoria
                    </label>
                    <Input type="text" id="category" placeholder="Categoria"/>
                    <ButtonContainer>
                        <ButtonAction>
                            Cadastrar
                        </ButtonAction>
                    </ButtonContainer>
                </Form>
                <Link to="/">Ir para Home</Link>
            </PageDefault>
        </React.Fragment>
    )
}

export default CadastroCategoria;