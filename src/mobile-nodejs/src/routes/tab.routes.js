import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Notificacoes from "../pages/Notificacoes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#89b364",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notificacoes"
        component={Notificacoes}
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={focused ? "#4CAF50" : color} 
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
