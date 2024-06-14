import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Notificacoes from "../pages/Notificacoes";
import Cadastro from "../pages/Cadastro";
import Agendamento from "../pages/Agendamento";
import Gastos from "../pages/Gastos";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificacoes"
        component={Notificacoes}
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarLabel: "Cadastro",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-plus"
              color={color} size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Agendamento"
        component={Agendamento}
        options={{
          tabBarLabel: "Agendamento",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Gastos"
        component={Gastos}
        options={{
          tabBarLabel: "Gastos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="currency-usd" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
