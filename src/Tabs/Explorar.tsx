import { ScrollView } from 'native-base';
import Procurar from '../componentes/Procurar';
import { Titulo } from '../componentes/Titulo';
import { Card } from '../componentes/Card';

export default function Explorar(){
    return(
        <ScrollView p={5}>
            <Procurar/>
            <Titulo color='blue.500' mb={3}>Resultados da busca</Titulo>

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