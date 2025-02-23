// src/navegacion/Types.ts
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Definición de las rutas y sus parámetros
export type RootStackParamList = {
  Login: undefined;       // Pantalla de inicio de sesión sin parámetros
  Register: undefined;    // Pantalla de registro sin parámetros
  Inicio: undefined;      // Pantalla de inicio sin parámetros
  Productos: undefined;   // Pantalla de productos sin parámetros
  Tiendas: undefined;     // Pantalla de tiendas sin parámetros
  Conocenos: undefined;   // Pantalla "Conócenos" sin parámetros
  Oferta: undefined;      // Pantalla de ofertas sin parámetros
  Contacto: undefined;    // Pantalla de contacto sin parámetros
  Perfil: undefined;      // Pantalla de perfil sin parámetros
  Carrito: undefined;     // Pantalla del carrito sin parámetros
  Novedades: undefined;
};

// Tipos para la pantalla de Login
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
export type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

// Tipos para la pantalla de Registro
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">;
export type RegisterScreenRouteProp = RouteProp<RootStackParamList, "Register">;

// Tipos para la pantalla de Inicio
export type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, "Inicio">;
export type InicioScreenRouteProp = RouteProp<RootStackParamList, "Inicio">;

// Tipos para la pantalla de Productos
export type ProductosScreenNavigationProp = StackNavigationProp<RootStackParamList, "Productos">;
export type ProductosScreenRouteProp = RouteProp<RootStackParamList, "Productos">;

// Tipos para la pantalla de Tiendas
export type TiendasScreenNavigationProp = StackNavigationProp<RootStackParamList, "Tiendas">;
export type TiendasScreenRouteProp = RouteProp<RootStackParamList, "Tiendas">;

// Tipos para la pantalla "Conócenos"
export type ConocenosScreenNavigationProp = StackNavigationProp<RootStackParamList, "Conocenos">;
export type ConocenosScreenRouteProp = RouteProp<RootStackParamList, "Conocenos">;

// Tipos para la pantalla de Oferta
export type OfertaScreenNavigationProp = StackNavigationProp<RootStackParamList, "Oferta">;
export type OfertaScreenRouteProp = RouteProp<RootStackParamList, "Oferta">;

// Tipos para la pantalla de Contacto
export type ContactoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Contacto">;
export type ContactoScreenRouteProp = RouteProp<RootStackParamList, "Contacto">;

// Tipos para la pantalla de Perfil
export type PerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, "Perfil">;
export type PerfilScreenRouteProp = RouteProp<RootStackParamList, "Perfil">;

// Tipos para la pantalla del Carrito
export type CarritoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Carrito">;
export type CarritoScreenRouteProp = RouteProp<RootStackParamList, "Carrito">;