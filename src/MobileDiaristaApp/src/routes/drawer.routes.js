import {createDrawerNavigator} from '@react-navigation/drawer';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons' ;
import TabRoutes from './tab.routes';


const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
            <Drawer.Navigator screenOptions={{title: '' }}>

            <Drawer.Screen
            name= "home"
            component={TabRoutes}
            options={{
                tabBarLabel: 'Home',
                DrawerIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />,
                  drawerLabel={Inicio}
                ),
              }}
            />
        </Drawer.Navigator>
    );
}