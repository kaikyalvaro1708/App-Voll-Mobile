import {Text, ITextProps} from 'native-base'
import {ReactNode} from 'react';

// Para o typescript permitir o uso de props
interface TituloProps extends ITextProps{
    children: ReactNode
}
// rest serve como props para os atributos de estilo
export function Titulo({children, ...rest}: TituloProps){
    return(
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.500"
          textAlign="center"
          mt={5}
          {...rest}
        >
          {children}
        </Text>
    )
}