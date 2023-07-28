import { VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base';
import {TouchableOpacity} from 'react-native'
import Logo from './assets/Logo.png';
import { Titulo } from './componentes/Titulo';

export default function Login() {

  const secoes = [
    {
      id: 1,
      titulo: "Insira alguns dados básicos",
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 1,
          label: 'Email',
          placeholder: 'Digite seu email completo'
        }
      ]
    }
  ]

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
        <Image source={Logo} alt="Logo Voll"/>

        <Titulo 
          children={'Faça login em sua conta'}>
        </Titulo>
        {/* Inputs */}
        <Box>
          <FormControl mt={3}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder='Insira seu endereço de Email'
              size='lg'
              w='100%'
              borderRadius='lg'
              bgColor='gray.100'
              shadow={3}
            />
          </FormControl>

          <FormControl mt={3}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder='Insira sua senha'
              size='lg'
              w='100%'
              borderRadius='lg'
              bgColor='gray.100'
              shadow={3}
            />
          </FormControl>
        </Box>

        <Button
          w='100%'
          bg='blue.800'
          mt={10}
          borderRadius='lg'
        >
          Entrar
        </Button>

        <Link href='https://www.alura.com.br' mt={2}>
          Esqueceu sua senha?
        </Link>

        <Box w='100%' mt={8} flexDirection='row' justifyContent='center'>
          <Text color="blue.500">
            Ainda não tem cadastro?
          </Text>
          <TouchableOpacity>
            <Text>
              Faça seu cadastro!
            </Text>
          </TouchableOpacity>
        </Box>
    </VStack>
  );
}


// VStack serve como o View