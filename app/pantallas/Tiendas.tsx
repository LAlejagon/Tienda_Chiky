// src/pantallas/Tiendas.tsx
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Animated } from "react-native";
import Header from "@componentes/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";
import { estilosTiendas } from "@estilos/TiendasEstilo";

// Define el tipo para las props de navegación
type TiendasScreenNavigationProp = StackNavigationProp<RootStackParamList, "Tiendas">;

interface TiendasProps {
  navigation: TiendasScreenNavigationProp;
}

// Define el tipo para las props de TarjetaTienda
interface TarjetaTiendaProps {
  nombre: string;
  direccion: string;
  telefono: string;
  horario: string;
  animacion: Animated.Value;
}

// Componente reutilizable para las tarjetas de tiendas
const TarjetaTienda: React.FC<TarjetaTiendaProps> = ({ nombre, direccion, telefono, horario, animacion }) => {
  return (
    <Animated.View style={[estilosTiendas.tarjeta, { transform: [{ scale: animacion }] }]}>
      <Text style={estilosTiendas.nombreTienda}>{nombre}</Text>
      <Text style={estilosTiendas.detalleTienda}>{direccion}</Text>
      <Text style={estilosTiendas.detalleTienda}>{telefono}</Text>
      <Text style={estilosTiendas.detalleTienda}>{horario}</Text>
      <TouchableOpacity style={estilosTiendas.botonLlamar}>
        <Text style={estilosTiendas.textoBoton}>Llamar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Tiendas: React.FC<TiendasProps> = ({ navigation }) => {
  const handleCartPress = () => {
    navigation.navigate("Carrito");
  };

  const handleSearch = (query: string) => {
    console.log("Búsqueda:", query);
  };

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  // Datos de ejemplo para las tiendas
  const tiendas = [
    {
      id: "1",
      nombre: "Tienda Central",
      direccion: "Calle Principal #123, Ciudad",
      telefono: "+123 456 7890",
      horario: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    },
    {
      id: "2",
      nombre: "Tienda Norte",
      direccion: "Avenida Norte #456, Ciudad",
      telefono: "+123 456 7891",
      horario: "Lunes a Sábado: 10:00 AM - 7:00 PM",
    },
    {
      id: "3",
      nombre: "Tienda Sur",
      direccion: "Calle Sur #789, Ciudad",
      telefono: "+123 456 7892",
      horario: "Martes a Domingo: 8:00 AM - 5:00 PM",
    },
  ];

  // Animación para las tarjetas
  const animaciones = tiendas.map(() => new Animated.Value(0));

  React.useEffect(() => {
    // Animación de entrada para las tarjetas
    animaciones.forEach((animacion, index) => {
      Animated.spring(animacion, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
        delay: index * 200, // Retraso para un efecto escalonado
      }).start();
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={estilosTiendas.contenedor}>
      <Header
        onCartPress={handleCartPress}
        onSearch={handleSearch}
        onNavigate={handleNavigate}
      />
      <Text style={estilosTiendas.titulo}>Nuestras Tiendas</Text>
      <Text style={estilosTiendas.subtitulo}>
        Encuentra la tienda más cercana a ti.
      </Text>

      {tiendas.map((tienda, index) => (
        <TarjetaTienda
          key={tienda.id}
          nombre={tienda.nombre}
          direccion={tienda.direccion}
          telefono={tienda.telefono}
          horario={tienda.horario}
          animacion={animaciones[index]}
        />
      ))}
    </ScrollView>
  );
};

export default Tiendas;