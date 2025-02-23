// src/pantallas/Productos.tsx
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator, Animated } from "react-native";
import { estilosProductos } from "@estilos/productoEstilo";
import { AntDesign } from "@expo/vector-icons";
import Header from "@componentes/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";

// Define el tipo para las props de navegación
type ProductosScreenNavigationProp = StackNavigationProp<RootStackParamList, "Productos">;

interface ProductosProps {
  navigation: ProductosScreenNavigationProp;
}

interface Producto {
  id: string;
  nombre: string;
  descripcion: string; // Nueva propiedad: descripción del producto
  precio: number;
  imagen: string;
  oferta: boolean;
}

const listaProductos: Producto[] = [
  {
    id: "1",
    nombre: "Comida para Perros",
    descripcion: "Alimento premium para perros de todas las razas.",
    precio: 25000,
    imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209862/samples/ecommerce/analog-classic.jpg",
    oferta: true,
  },
  {
    id: "2",
    nombre: "Juguete para Gatos",
    descripcion: "Juguete interactivo para gatos, ideal para horas de diversión.",
    precio: 15000,
    imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209862/samples/ecommerce/analog-classic.jpg",
    oferta: false,
  },
  {
    id: "3",
    nombre: "Collar para Perros",
    descripcion: "Collar ajustable y resistente para perros pequeños y medianos.",
    precio: 18000,
    imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209862/samples/ecommerce/analog-classic.jpg",
    oferta: true,
  },
  {
    id: "4",
    nombre: "Rascador para Gatos",
    descripcion: "Rascador de alta calidad para mantener las uñas de tu gato en perfecto estado.",
    precio: 30000,
    imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209862/samples/ecommerce/analog-classic.jpg",
    oferta: false,
  },
];

const Productos: React.FC<ProductosProps> = ({ navigation }) => {
  const [busqueda, setBusqueda] = useState<string>("");
  const [cargando, setCargando] = useState<boolean>(true);
  const [animaciones] = useState(listaProductos.map(() => new Animated.Value(0)));

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animación de entrada para los productos
    animaciones.forEach((animacion, index) => {
      Animated.spring(animacion, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
        delay: index * 200, // Retraso para un efecto escalonado
      }).start();
    });
  }, []);

  const productosFiltrados = listaProductos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleCartPress = () => {
    navigation.navigate("Carrito");
  };

  const handleSearch = (query: string) => {
    setBusqueda(query);
  };

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  const handleAgregarAlCarrito = (producto: Producto) => {
    console.log("Producto agregado:", producto.nombre);
    // Aquí puedes agregar la lógica para añadir el producto al carrito
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        onCartPress={handleCartPress}
        onSearch={handleSearch}
        onNavigate={handleNavigate}
      />
      <View style={estilosProductos.contenedor}>
        {cargando ? (
          <ActivityIndicator size="large" color="#ff914d" style={{ marginTop: 20 }} />
        ) : productosFiltrados.length === 0 ? (
          <Text style={estilosProductos.mensajeVacio}>No hay productos disponibles</Text>
        ) : (
          <FlatList
            data={productosFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <Animated.View
                style={[
                  estilosProductos.tarjeta,
                  { transform: [{ scale: animaciones[index] }] },
                ]}
              >
                {item.oferta && <Text style={estilosProductos.etiquetaOferta}>¡Oferta!</Text>}
                <Image source={{ uri: item.imagen }} style={estilosProductos.imagen} />
                <Text style={estilosProductos.nombre}>{item.nombre}</Text>
                <Text style={estilosProductos.descripcion}>{item.descripcion}</Text>
                <Text style={estilosProductos.precio}>${item.precio.toLocaleString()}</Text>
                <TouchableOpacity
                  style={estilosProductos.botonAgregar}
                  activeOpacity={0.7}
                  onPress={() => handleAgregarAlCarrito(item)}
                >
                  <Text style={estilosProductos.textoBoton}>Agregar al Carrito</Text>
                </TouchableOpacity>
              </Animated.View>
            )}
            numColumns={2}
            contentContainerStyle={estilosProductos.lista}
          />
        )}
      </View>
    </View>
  );
};

export default Productos;