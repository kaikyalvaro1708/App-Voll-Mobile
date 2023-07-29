import { Text, Avatar, VStack} from 'native-base';
import { Botao } from './Botao';


// Passar como parametro para se usar
interface CardProps{
    nome: string;
    foto: string;
    especialidade: string;
    data?: string; // a interrogação indica que não é obrigatório
    foiAtendido?: boolean;
    foiAgendado?: boolean;     
}



export function Card ({
    nome,
    foto,
    data,
    especialidade,
    foiAgendado,
    foiAtendido
}: CardProps){
    return(
        <VStack w='100%' bg={foiAtendido ? 'blue.100' : 'white'} borderRadius='lg' p={5} shadow='2'>
            <VStack flexDir='row'>
                <Avatar source={{uri:foto}}
                    mt={5} size="lg"/>
                <VStack pl={4}>
                    <Text fontSize='md' fontWeight='bold'>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>20/04/2023  </Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                {/* if ternário */}
                {foiAgendado? 'Cancelar consulta' : 'Agendar consulta'}
            </Botao>
        </VStack>
    )
}