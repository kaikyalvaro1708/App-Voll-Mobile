import { Box } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";


export default function Procurar() {
    return (
        <Box width='100%' borderRadius='lg' p={3} mt={10} shadow='1' borderRightRadius='md'>
            <EntradaTexto
                placeholder='Digite a especialidade'
            />
            <EntradaTexto
                placeholder='Digite sua localização'
            />
            <Botao mb={3} mt={3}>Buscar</Botao>
        </Box>
    )
}