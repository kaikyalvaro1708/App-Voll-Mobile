import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // biblioteca da barra de navegação
import Principal from "./Principal";
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Explorar from "./Explorar";
import Ionicons from 'react-native-vector-icons/Ionicons'; // biblioteca dos icones


// ================================================= OBJETOS

const Tab = createBottomTabNavigator();

const screenOptions = {
        tabBarStyle:{
            backgroundColor: '#002851',
        },
        tabBarActiveTintColor: '#339cff',
        tabBarInactiveTintColor: '#fff'
}

// seções do app
const tabs = [
    {
        name: 'Principal',
        component: Principal,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    },
]

// ============================================== JSX

export default function Tabs(){
    return(
        <Tab.Navigator
            // add estilos
            screenOptions={screenOptions}
        >
            { tabs.map((tab)=>(
                <Tab.Screen
                key={tab.name} // cada nome é único
                name={tab.name}
                component={tab.component}
                // adicionando icones
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name={tab.icon} 
                        color={color} size={size}/>
                    )
                }}
            />))
            }
        </Tab.Navigator>
    )
}