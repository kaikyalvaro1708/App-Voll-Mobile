import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { Titulo } from '../componentes/Titulo';

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color='blue.500'>
                    Meu perfil
                </Titulo>

                <Avatar source={{uri: 'https://github.com/kaikyalvaro1708.png'}}
                    mt={5} size="xl"
                />

                <Titulo color='blue.500'>Informações pessoais</Titulo>
                <Titulo fontSize='lg' mb={1}>Kaiky Alvaro</Titulo>
                <Text>17/08/2004</Text>
                <Text>São Paulo</Text>

                <Divider mt={5}/>

                <Titulo color='blue.500' mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}