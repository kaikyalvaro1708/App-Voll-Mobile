import React from 'react';
import { VStack, Text, ScrollView, Image, Box, Divider } from 'native-base';
import { Titulo } from '../componentes/Titulo';
import { Botao } from '../componentes/Botao';
import Logo from '../assets/Logo.png';
import { EntradaTexto } from '../componentes/EntradaTexto';


const depoimentos=[
    {
        texto: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        endereco: 'Júlio, 40 anos, São Paulo/SP.'
    },
    {
        texto: 'At Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        endereco: 'Júlio, 40 anos, São Paulo/SP.'
    },
    {
        texto: 'At Nam libero Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
        endereco: 'Júlio, 40 anos, São Paulo/SP.'
    }
]

export default function Principal(){
    return(
        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5} >
                <Image source={Logo} alt="Logo da Voll"
                    mb={10}
                />

                <Titulo
                    color='blue.500'>
                        Boas-vindas!
                </Titulo>

                <Box width='100%' borderRadius='lg' p={3} mt={10} shadow='1' borderRightRadius='md'>
                   <EntradaTexto
                        placeholder='Digite a especialidade'
                   />
                   <EntradaTexto
                        placeholder='Digite sua localização'
                   />
                    
                   <Botao mb={3} mt={3}>Buscar</Botao>
                </Box>

                <Titulo color='blue.800' alignSelf='center'>Depoimentos</Titulo>
                <VStack space={3} divider={<Divider/>} w='100%'>
                    {depoimentos.map((depoimento, index) => (
                    <Box key={index} w='100%' borderRadius='lg' p={4} rounded="md" mt={4}>
                        <Text 
                            color='gray.300' 
                            fontSize='md' 
                            textAlign='justify'
                            >
                            {depoimento.texto}
                        </Text>
                        <Text 
                            color='gray.500' 
                            fontSize='lg' 
                            alignSelf='center'
                            fontWeight='bold'
                            mt='2'
                            >
                        {depoimento.endereco}
                        </Text>
                    </Box>
                    ))}
                </VStack>
            </VStack>
        </ScrollView>    
    )
}