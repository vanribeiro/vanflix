import React, { useState } from 'react';
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

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
`;

const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 100px;
    background-color: #53585D;
    border: none;
    color: #E5E5E5;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.125em;
    line-height: 21px;
    padding: 5px;
`;

const CadastroCategoria = () => {
    
    const initialValues = {
        name: '',
        description: '',
        color: '',
    }
    
    const [categories, setCategory] = useState([]);
    const [values, setValues] = useState(initialValues);
    
    
    const setValue = (key, value) => {
        setValues({
            ...values,
            [key]: value
        })
    }
    
    const handlerChange = (event) => {
        setValue(event.target.getAttribute('name'), event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
            setCategory([
                ...categories, values
            ]);
        setValues(initialValues);
    }

    return(
        <React.Fragment>
            <PageDefault>
                <h1>Cadastro de Categoria: {values.name} </h1>
                <Form onSubmit={handleSubmit}>
                    <Fieldset>
                        <label htmlFor="category">
                            Nome da Categoria:
                        </label>
                        <Input type="text" 
                        value={values.name}
                        name="name"
                        onChange={handlerChange}
                        id="category" placeholder="Categoria"/>
                    </Fieldset>
                    <Fieldset>
                        <label htmlFor="description">
                            Descrição:
                        </label>
                        <TextArea type="text" 
                        value={values.description}
                        name="description"
                        onChange={handlerChange}
                        id="description" placeholder="Descrição" />
                    </Fieldset>
                    <Fieldset>
                        <label htmlFor="color-category">
                            Cor:
                        </label>
                        <Input type="color" 
                        value={values.color}
                        name="color"
                        onChange={handlerChange}
                        id="color-category"/>
                    </Fieldset>
                    <ButtonContainer>
                        <ButtonAction>
                            Cadastrar
                        </ButtonAction>
                    </ButtonContainer>
                </Form>
                <ul>
                    {categories.map((categoria, indice) =>{
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria.name}
                            </li>
                        )
                    })}
                </ul>
                <Link to="/">Ir para Home</Link>
            </PageDefault>
        </React.Fragment>
    )
}

export default CadastroCategoria;