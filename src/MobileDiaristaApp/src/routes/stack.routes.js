import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';

const Stack = createStackNavigator();

export default function Stack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerShown: false }}
            />
               <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
