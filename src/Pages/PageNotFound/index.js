import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from './../PageDefault';
import logo from './../../Assets/Images/logo-vanflix.png';
import gif from './../../Assets/Images/gif-john-travolta.gif';
import styled from 'styled-components';

const H1 = styled.h1`
  color: white;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const IMG = styled.img`
    max-width: 100%;
`;

const PageNotFound = () => {
    document.title = 'VanFlix - Ops... Página não Encontrada';
    return (
        <React.Fragment>
            <PageDefault>
                <Container>
                    <IMG src={gif} alt="Gif John Travolta" />
                    <H1> Ops... Página Não Encontrada!</H1>
                    <p>Parece que você está tentando acessar uma página 
                        que não existe... <br />Mas você encontrará muito conteúdo bacana na home:</p>
                    <Link to="/">
                        <IMG src={logo} alt="Logo VanFlix" />
                    </Link>
                </Container>
            </PageDefault>
        </React.Fragment>
    )
}

export default PageNotFound;