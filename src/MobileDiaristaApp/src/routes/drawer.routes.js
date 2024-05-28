import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';
import Agendamento from '../pages/Agendamento';  // Update the import path as needed
import Gastos from '../pages/Gastos';            // Update the import path as needed
import Cadastro from '../pages/Cadastro';        // Update the import path as needed
import Notificacoes from '../pages/Notificacoes';// Update the import path as needed
import SobreNos from '../pages/Sobre nós';        // Update the import path as needed

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name="Home"
                component={TabRoutes}
                options={{
                    drawerLabel: 'Inicio',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="SobreNos"
                component={SobreNos}
                options={{
                    drawerLabel: 'Sobre Nós',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="information" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    drawerLabel: 'Cadastro',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-plus" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Usuario"
                component={StackRoutes}
                options={{
                    drawerLabel: 'Login',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Agendamento"
                component={Agendamento}
                options={{
                    drawerLabel: 'Agendamento',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Notificacoes"
                component={Notificacoes}
                options={{
                    drawerLabel: 'Notificações',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Gastos"
                component={Gastos}
                options={{
                    drawerLabel: 'Gastos',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="currency-usd" color={color} size={26} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
