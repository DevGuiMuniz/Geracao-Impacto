import styled from 'styled-components'
import OndaDireita from '../assets/onda.svg'
import Mentoria from '../assets/mentoria.png'
import Curso from '../assets/cursos.jpg'
import Networking from '../assets/networking.jpg'
import OndaInferior from '../assets/onda-Inferior.svg'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
 
const HeaderGeracao = styled.header`
    font-family: 'Neurial Grotesk';
    animation-name: aparecimento;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    
    color: #000; 
    text-align: left;
    padding: 0;
    min-height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    overflow: hidden; 
    width: 100%; 
    box-sizing: border-box; 
    @media (max-width: 768px) {
    min-height: 60vh;
    align-items: center;
  }


  @media (max-width: 320px) {
  min-height: 55vh;
  padding: 10px;
}
@keyframes aparecimento {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
   

`

const Headerh1 = styled.h1`
   font-size: 4.5rem;
   padding: 0px;
    margin-top: 9%;
    margin-left: 5%;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 3rem;
        margin-top: 40%;
        margin-left: 0;
        text-align: center; 
    }

    @media (max-width: 480px) {
        font-size: 2.5rem;
        margin-left: 0;
    }
    @media (max-width: 320px) {
  font-size: 2rem;
  margin-top: 30%;
}
@media (min-width: 768px) and (max-width: 1024px) {
  font-size: 3.5rem;
  margin-top: 15%;
}


`

const Headerp = styled.p`
 margin-left: 5%;
font-size: 1.3rem;
@media (max-width: 768px) {
        font-size: 1.3rem;
        margin-left: 0; 
        text-align: center; 
        margin-top: 20px; 
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        margin-left: 0; 
    }
    @media (max-width: 320px) {
  font-size: 0.8rem;
  margin-top: 15px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  font-size: 1.5rem; 
  margin-top: 15px; 
}


`

const WaveDireita = styled.div`
    position: absolute; 
    top: 0;
    right: 0; 
    z-index: -1;
    width: auto;
    max-width: 76vh;
    height: 140vh; 
    overflow: hidden;
    pointer-events: none;

    @media (max-width: 768px) {
        display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }

`


const WaveImg = styled.img`
    width: 100%; 
    height: auto; 
    margin-top: -20.7px;
    margin-left: 18.5vh;
`

const ContainerFerramentas = styled.div`
  width: 100%;
  height: auto;
  background-color: #16a8ab;
  display: flex;
  margin-top: 40.6vh;
  padding: 0;

  flex-direction: column;
  font-family: 'Neurial Grotesk';   
`;


const TituloFerramentas = styled.h2`
  margin-left: 50px;
`;

const TextoContainer = styled.p`
 font-family: 'Neurial Grotesk';
  margin-left: 30px;
  font-size: 1.9rem;
`;


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 90px;
  padding: 0 5%;
  #ferramentas-section{
  
}

  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
  flex-direction: row; 
  justify-content: space-between; 
  padding: 0 2%;
}

`;

const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 
`;


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 280px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;

  @media (max-width: 480px) {
    width: 100%; 
    margin: 10px;
  }


  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 320px) {
  margin: 5px;
  padding: 10px;
  width: 90%; 
}
@media (min-width: 768px) and (max-width: 1024px) {
  width: 45%; 
  margin: 20px 10px; 
}
`


const CardImg = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;


const CardTitulo = styled.h3`
  font-family: 'Neurial Grotesk';
  color: #fa7343;
  margin: 20px 0 10px 0;
`;


const CardTexto = styled.p`
  font-family: 'Neurial Grotesk';
  color: #333;
  font-size: 1.2rem;
`;

const ContainerContato = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    height: auto;
    min-height: auto;
 
`

const WaveEsquerda = styled.div`
    top: 0;
    left: 0; 
    z-index: -1;
    width: auto;
    max-width: 59vh;
    height: 100vh;
    overflow: hidden;
    @media (max-width: 768px) {
        display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }

`;

const WaveImgE = styled.img`
    width: 100%; 
    height: auto;
    margin-top: -50.3px;
    margin-left: -6.4vh;
`;

const FormContainer = styled.div`
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    @media (max-width: 768px) {
        padding: 20px; 
    }
    
    @media (max-width: 480px) {
        padding: 10px; 
        width: 95%; 
    }
    @media (max-width: 320px) {
  padding: 5px;
  margin-top: 5vh;
}
@media (min-width: 768px) and (max-width: 1024px) {
  padding: 30px; 
  width: 80%; 
  max-width: 600px; 
}

    
`;

const FormTitle = styled.h1`
    text-align: center;
    font-size: 3.2rem;
    margin-bottom: 20px;
    font-family: 'Neurial Grotesk';
    
`;

const FormLabel = styled.label`
    font-family: 'Neurial Grotesk';
    font-weight: bold;
    display: block;
    margin-top: 25px;
    font-size: 1.2rem;
`;

const RequiredSpan = styled.span`
    color: red;
`;

const FormInput = styled.input`
    font-family: 'Neurial Grotesk';
    width: 100%;
    padding: 11px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #D9D9D9;
`;

const FormTextarea = styled.textarea`
    font-family: 'Neurial Grotesk';
    width: 100%;
    padding: 11px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #D9D9D9;
    resize: none;
`;

const ButtonContato = styled.button`
    transition: background-color 0.3s ease;
    background-color: #d13232;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    margin: 20px 45vh;
    cursor: pointer;

    &:hover {
        background-color: #b72b2b;
    }

    
`;

function ConteudoHome(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Enviando dados:', { nome, email, mensagem });
  
    try {
     
      const response = await axios.post('http://localhost:3000/api/message', {
        nome_FaleConosco: nome,
        email_FaleConosco: email,
        mensagem: mensagem,
      });
  
      console.log('Resposta do servidor:', response.data);
      setSuccess(response.data.message); 
      setNome('');
      setEmail('');
      setMensagem('');
    } catch (err) {
      console.error('Erro ao enviar dados:', err);
      setError('Erro ao enviar mensagem. Tente novamente.');
    }
  };

    return(

        <HeaderGeracao>
           <Headerh1>Geração <br />Impacto</Headerh1>
           <Headerp>Aqui seu sonho tem significado. <br /> Conecte com pessoas e desenvolve suas habilidades</Headerp>
           <WaveDireita>
               <WaveImg src={OndaDireita} alt="Descrição do SVG" />
           </WaveDireita> 
           <ContainerFerramentas>
      <TituloFerramentas>Nossas Ferramentas</TituloFerramentas>
      <TextoContainer>
        Descubra recursos para seu desenvolvimento e conexão.
      </TextoContainer>

      <CardContainer id='ferramentas-section'>
        <StyledLink to="/mentoria">
        <Card>
          <CardImg src={Mentoria} alt="Programa de Mentoria" />
          <CardTitulo>Programa de Mentoria &gt;</CardTitulo>
          <CardTexto>
            Conecte-se com profissionais de sucesso e compartilhe conhecimentos.
          </CardTexto>
        </Card>
        </StyledLink>
        <StyledLink to="/networking">
        <Card>
          <CardImg src={Networking} alt="Plataforma de Networking" />
          <CardTitulo>Plataforma de Networking &gt;</CardTitulo>
          <CardTexto>
            Conecte-se e compartilhe experiências valiosas com colegas.
          </CardTexto>
        </Card>
        </StyledLink>
        <StyledLink to="/cursos">
        <Card>
          <CardImg src={Curso} alt="Cursos Online & Webinar" />
          <CardTitulo>Cursos Online & Webinar &gt;</CardTitulo>
          <CardTexto>
            Aprimore suas habilidades com recursos de aprendizagem online
            gratuitos e impulsione suas habilidades.
          </CardTexto>
        </Card>
        </StyledLink>
      </CardContainer>
    </ContainerFerramentas>
    <ContainerContato>
            <WaveEsquerda>
                <WaveImgE src={OndaInferior} alt="Onda inferior" />
            </WaveEsquerda>
            <FormContainer id="formulario-section">
            <FormTitle>Fale Conosco</FormTitle>
            <form onSubmit={handleSubmit}>
                <FormLabel htmlFor="name">Nome <RequiredSpan>*</RequiredSpan></FormLabel>
                <FormInput 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required 
                />

                <FormLabel htmlFor="email">E-mail <RequiredSpan>*</RequiredSpan></FormLabel>
                <FormInput 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />

                <FormLabel htmlFor="message">Mensagem <RequiredSpan>*</RequiredSpan></FormLabel>
                <FormTextarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required 
                />
                
                <ButtonContato type="submit">Enviar</ButtonContato>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </FormContainer>
        </ContainerContato>
        </HeaderGeracao>

    )
}
export default ConteudoHome