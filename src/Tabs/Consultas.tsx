import { VStack, Text } from 'native-base';
import { Card } from '../componentes/Card';
import { Titulo } from '../componentes/Titulo';

export default function Consultas(){
    return(
        <VStack p={5}>
            <Titulo>Minhas consultas</Titulo>
            <Card
                nome='Dr. Kaiky'
                especialidade='Cardiologista'
                foto='https://github.com/kaikyalvaro1708.png'
                data='20/04/2023'
                foiAgendado
                foiAtendido
            />
        </VStack>
    )
}