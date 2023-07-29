import React from 'react';
import { VStack, Text, ScrollView, Image, Box, FormControl, Input } from 'native-base';
import { Titulo } from '../componentes/Titulo';
import { Botao } from '../componentes/Botao';
import Logo from '../assets/Logo.png';


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
        <ScrollView flex={1}>
            <VStack>
                <Image source={Logo} alt="Logo da Voll"
                    mb={5}
                />

                <Titulo
                    mb={5}
                    color='blue.500'>
                        Boas-vindas!
                </Titulo>

                <Box>
                   <FormControl>
                        <FormControl.Label>Digite a especialidade</FormControl.Label>
                        <Input/>
                   </FormControl>

                   <FormControl>
                        <FormControl.Label>Digite sua localização</FormControl.Label>
                        <Input/>
                   </FormControl>

                   <Botao>Buscar</Botao>
                </Box>

                <Titulo>Depoimentos</Titulo>

            
                {depoimentos.map((depoimento, index) => (
                <Box key={index} bg="gray.100" p={4} rounded="md" mt={4}>
                    <Text>{depoimento.texto}</Text>
                    <Text>{depoimento.endereco}</Text>
                </Box>
                ))}
              
            </VStack>
        </ScrollView>    
    )
}