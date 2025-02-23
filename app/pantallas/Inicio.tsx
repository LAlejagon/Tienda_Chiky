import React from "react";
import { ScrollView, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "@componentes/Header";
import ProductosDestacados from "@pantallas/Destacados";
import estilosInicio from "@estilos/InicioEstilo";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

// Define el tipo para las props de navegación
type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, "Inicio">;

interface InicioProps {
  navigation: InicioScreenNavigationProp;
}

const Inicio: React.FC<InicioProps> = ({ navigation }) => {
  const handleCartPress = () => {
    navigation.navigate("Carrito");
  };

  const handleSearch = (query: string) => {
    console.log("Búsqueda:", query);
  };

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  const imagenesCarrusel = [
    { id: "1", uri: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209864/samples/ecommerce/leather-bag-gray.jpg" },
    { id: "2", uri: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209875/samples/ecommerce/analog-classic.jpg" },
    { id: "3", uri: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209882/samples/ecommerce/shoes.jpg" },
  ];

  return (
    <View style={estilosInicio.contenedor}>
      {/* Header */}
      <Header onCartPress={handleCartPress} onSearch={handleSearch} onNavigate={handleNavigate} />

      {/* ScrollView para el contenido */}
      <ScrollView contentContainerStyle={estilosInicio.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Carrusel de imágenes */}
        <FlatList
          data={imagenesCarrusel}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={estilosInicio.imagenCarrusel} resizeMode="cover" />
          )}
        />

        {/* Sección de Productos Destacados */}
        <View style={estilosInicio.sectionContainer}>
          <Text style={estilosInicio.sectionTitle}>🐾 Productos Destacados</Text>
          <ProductosDestacados />
        </View>

        {/* Ofertas Especiales */}
        <View style={estilosInicio.sectionContainer}>
          <Text style={estilosInicio.sectionTitle}>🔥 Ofertas Especiales</Text>
          <Text style={estilosInicio.sectionDescription}>
            Descubre nuestras ofertas exclusivas en productos seleccionados.
          </Text>
          <TouchableOpacity style={estilosInicio.boton} onPress={() => handleNavigate("Oferta")}>
            <MaterialIcons name="local-offer" size={22} color="#fff" />
            <Text style={estilosInicio.textoBoton}>Ver Ofertas</Text>
          </TouchableOpacity>
        </View>

        {/* Nuevos Lanzamientos */}
        <View style={estilosInicio.sectionContainer}>
          <Text style={estilosInicio.sectionTitle}>🚀 Nuevos Lanzamientos</Text>
          <Text style={estilosInicio.sectionDescription}>
            Explora los productos más recientes que hemos añadido a nuestro catálogo.
          </Text>
          <TouchableOpacity style={estilosInicio.boton} onPress={() => handleNavigate("Novedades")}>
            <FontAwesome5 name="star" size={18} color="#fff" />
            <Text style={estilosInicio.textoBoton}>Descubrir</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default Inicio;
