// src/pantallas/Conocenos.tsx
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Header from "@componentes/Header";
import { estilosConocenos } from "@estilos/ConocenosEstilo";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";

type ConocenosScreenNavigationProp = StackNavigationProp<RootStackParamList, "Conocenos">;

interface ConocenosProps {
  navigation: ConocenosScreenNavigationProp;
}

const Conocenos: React.FC<ConocenosProps> = ({ navigation }) => {
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
    <ScrollView contentContainerStyle={estilosConocenos.contenedor}>
      <Header
        onCartPress={handleCartPress}
        onSearch={handleSearch}
        onNavigate={handleNavigate}
      />
      <Text style={estilosConocenos.titulo}>Conócenos</Text>
      <Text style={estilosConocenos.subtitulo}>
        Descubre más sobre nuestra historia y misión.
      </Text>

      <Image
        source={{
          uri: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209864/samples/ecommerce/leather-bag-gray.jpg",
        }}
        style={estilosConocenos.imagen}
      />

      <Text style={estilosConocenos.texto}>
        En Tienda Chiky, nos dedicamos a ofrecerte los mejores productos para tus
        mascotas. Nuestra misión es brindar calidad, confianza y un servicio
        excepcional a todos nuestros clientes.
      </Text>
    </ScrollView>
  );
};

export default Conocenos;