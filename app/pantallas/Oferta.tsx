// src/pantallas/Oferta.tsx
import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import Header from "@componentes/Header";
import { estilosOferta } from "@estilos/OfertaEstilo";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";

type OfertaScreenNavigationProp = StackNavigationProp<RootStackParamList, "Oferta">;

interface OfertaProps {
  navigation: OfertaScreenNavigationProp;
}

const productosOferta = [
  {
    id: "1",
    nombre: "Comida para Perros",
    precio: 25000,
    imagen:
      "https://res.cloudinary.com/dummqa49l/image/upload/v1739209862/samples/ecommerce/analog-classic.jpg",
  },
  {
    id: "2",
    nombre: "Juguete para Gatos",
    precio: 15000,
    imagen:
      "https://res.cloudinary.com/dummqa49l/image/upload/v1739209862/samples/ecommerce/analog-classic.jpg",
  },
];

const Oferta: React.FC<OfertaProps> = ({ navigation }) => {
  const handleCartPress = () => {
    navigation.navigate("Carrito");
  };

  const handleSearch = (query: string) => {
    console.log("Búsqueda:", query);
  };

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView contentContainerStyle={estilosOferta.contenedor}>
      <Header
        onCartPress={handleCartPress}
        onSearch={handleSearch}
        onNavigate={handleNavigate}
      />
      <Text style={estilosOferta.titulo}>Ofertas Especiales</Text>

      <FlatList
        data={productosOferta}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilosOferta.tarjeta}>
            <Image source={{ uri: item.imagen }} style={estilosOferta.imagen} />
            <Text style={estilosOferta.nombre}>{item.nombre}</Text>
            <Text style={estilosOferta.precio}>${item.precio.toLocaleString()}</Text>
          </View>
        )}
        numColumns={2}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default Oferta;