import React from 'react';
import Menu from './../../Components/Menu';
import Footer from './../../Components/Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 50px 5%;
`;

const PageDefault = ({children}) => {
    return(
        <React.Fragment>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </React.Fragment>
    );
}

export default PageDefault;