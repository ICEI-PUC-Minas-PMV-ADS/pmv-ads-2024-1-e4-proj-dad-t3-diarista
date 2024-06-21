import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pages/Home';
import Notificacoes from '../pages/Notificacoes';
import Agendamento from '../pages/Agendamento';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Gastos from '../pages/Gastos';
import CadastroCliente from '../pages/CadastroCliente';
import ListaClientes from '../pages/ListaClientes';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TabRoutes = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Notificacoes"
      component={Notificacoes}
      options={{
        tabBarLabel: 'Notificações',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarLabel: 'Login',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

const DrawerRoutes = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabRoutes} />
    <Drawer.Screen name="Cadastro" component={Cadastro} />
    <Drawer.Screen name="Usuario" component={StackRoutes} />
    <Drawer.Screen name="CadastroCliente" component={CadastroCliente} />
    <Drawer.Screen name="ListaClientes" component={ListaClientes} />
    <Drawer.Screen name="Agendamento" component={Agendamento} />
    <Drawer.Screen name="Notificacoes" component={Notificacoes} />
    <Drawer.Screen name="Gastos" component={Gastos} />
    <Drawer.Screen name="User" component={StackRoutes} />
  </Drawer.Navigator>
);

const StackRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false }} />
    <Stack.Screen name="Agendamento" component={Agendamento} />
  </Stack.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
