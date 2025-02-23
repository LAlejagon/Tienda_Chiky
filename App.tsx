// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "@pantallas/Inicio";
import Productos from "@pantallas/Productos";
import Tiendas from "@pantallas/Tiendas";
import Conocenos from "@pantallas/Conocenos";
import Oferta from "@pantallas/Oferta";
import Contacto from "@pantallas/Contacto";
import Perfil from "@pantallas/Perfil";
import Carrito from "@pantallas/Carrito";
import Login from "@pantallas/Login";
import { RootStackParamList } from "@navegación/Types";
import Register from "@pantallas/Register";

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Productos" component={Productos} />
        <Stack.Screen name="Tiendas" component={Tiendas} />
        <Stack.Screen name="Conocenos" component={Conocenos} />
        <Stack.Screen name="Oferta" component={Oferta} />
        <Stack.Screen name="Contacto" component={Contacto} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Carrito" component={Carrito} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; // Exportación por defecto