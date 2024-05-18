import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons' ;

import Home from '../pages/Home';
import Login from '../pages/Login';
import Notificacoes from '../pages/Notificacoes';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
        name="feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Notifications"
        component={Notificacoes}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
  
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
}