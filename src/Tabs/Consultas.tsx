import { ScrollView, Divider } from 'native-base';
import { Card } from '../componentes/Card';
import { Titulo } from '../componentes/Titulo';
import { Botao } from '../componentes/Botao';


export default function Consultas(){
    return(
        <ScrollView p={5}>
            <Titulo color='blue.500'>Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color='blue.500' 
                fontSize='lg' 
                alignSelf='flex-start'
                mb={2}
            >
                Próximas consultas
            </Titulo>
            <Card
                nome='Dr. Kaiky'
                especialidade='Cardiologista'
                foto='https://github.com/kaikyalvaro1708.png'
                data='20/04/2023'
                foiAgendado
            />

            <Divider mt={5}/>

            <Titulo color='blue.500' 
                fontSize='lg' 
                alignSelf='flex-start'
                mb={2}
            >
                Consultas passadas
            </Titulo>
            <Card
                nome='Dr. Kaiky'
                especialidade='Cardiologista'
                foto='https://github.com/kaikyalvaro1708.png'
                data='20/04/2023'
                foiAtendido
            />
             <Card
                nome='Dr. Kaiky'
                especialidade='Cardiologista'
                foto='https://github.com/kaikyalvaro1708.png'
                data='20/04/2023'
                foiAtendido
            />
             <Card
                nome='Dr. Kaiky'
                especialidade='Cardiologista'
                foto='https://github.com/kaikyalvaro1708.png'
                data='20/04/2023'
                foiAtendido
            />
        </ScrollView>
    )
}