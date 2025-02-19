import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Inicio } from "../pantallas/Inicio";
import { Productos } from "../pantallas/Productos";
import { Carrito } from "../pantallas/Carrito";
import { Perfil } from "../pantallas/Perfil";
import { Tiendas } from "../pantallas/Tiendas";

const Tab = createBottomTabNavigator();

export function Navegador() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Productos" component={Productos} />
        <Tab.Screen name="Carrito" component={Carrito} />
        <Tab.Screen name="Tiendas" component={Tiendas} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
