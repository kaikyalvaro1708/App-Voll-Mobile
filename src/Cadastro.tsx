import {Image, Box, Checkbox, ScrollView, Text } from 'native-base';
import Logo from './assets/Logo.png';
import { useState} from 'react';
import { Titulo } from './componentes/Titulo';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { secoes } from './Utils/CadastroEntradaTexto';

export default function Cadastro() {
  // ==========================================SECOES/LISTA
  const[numSecao, setNumSecao] = useState(0);
  
  // ==========================================FUNCOES
  // Função para quando aperta o botao, avançar para a proxima pagina
  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao+1);
    }
  }

  function voltarSecao(){
    if(numSecao > 0 ){
      setNumSecao(numSecao-1);
    }
  }
  // =========================================== TSX
  return (
    <ScrollView flex={1} p={5}>
        <Image source={Logo} alt="Logo Voll" alignSelf="center"/>

        <Titulo>
            {secoes[numSecao].titulo}
        </Titulo>

        {/* ENTRDA DE TEXTO */}
        <Box>
          {
            secoes[numSecao]?.entradaTexto?.map(entrada =>{
              return <EntradaTexto label={entrada.label}
              placeholder={entrada.placeholder} 
              key={entrada.id}/>
            })
          }
        </Box>

        {/* CHECKBOX */}
        <Box>
          <Text color="blue.800" fontWeight="bold"
            fontSize="md" mt="2" mb={2}>
            Selecione o plano:
          </Text>
          {
            secoes[numSecao].checkbox.map(checkbox =>{
              return <Checkbox key={checkbox.id}
              value={checkbox.value}>
                {checkbox.value}
              </Checkbox>
            })
          }
        </Box>

        {/* BOTOES */}
        {/* Verificação para não aparecer na primeira secao */}
        {numSecao> 0 &&  <Botao onPress={() => voltarSecao()}
          bgColor='gray.400'
        >
          Voltar
        </Botao>}
        <Botao onPress={() => avancarSecao()} mt={4} mb={20}>
          Avançar
        </Botao>


    </ScrollView>
  );
}

// O ScrollView permite rolar a tela de cima para baixo