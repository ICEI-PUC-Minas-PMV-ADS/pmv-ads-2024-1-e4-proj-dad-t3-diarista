import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import Agendamento from "../pages/Agendamento"; 
import Gastos from "../pages/Gastos"; 
import Cadastro from "../pages/Cadastro"; 
import Notificacoes from "../pages/Notificacoes"; 
import CadastroCliente from "../pages/CadastroCliente/CadastroCliente";
import SobreNos from "../pages/SobreNos";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "",
        drawerActiveTintColor: "#4CAF50", 
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        options={{
          drawerLabel: "Inicio",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="SobreNos"
        component={SobreNos}
        options={{
          drawerLabel: "Sobre Nós",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="alert-circle"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notificacoes"
        component={Notificacoes}
        options={{
          drawerLabel: "Notificações",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="bell"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Agendamento"
        component={Agendamento}
        options={{
          drawerLabel: "Agendamento",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="calendar"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CadastroCliente"
        component={CadastroCliente}
        options={{
          drawerLabel: "Cadastrar Cliente",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Gastos"
        component={Gastos}
        options={{
          drawerLabel: "Gastos",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="currency-usd"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Usuario"
        component={StackRoutes}
        options={{
          drawerLabel: "Usuario",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account-edit"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          drawerLabel: "Cadastrar",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account-plus-outline"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="User"
        component={StackRoutes}
        options={{
          drawerLabel: "Login",
          drawerIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
