import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import estilosProductosDestacados from "@estilos/DestacadoEstilo";

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  etiqueta: string;
  imagen: string;
  categoria: string;
}

const productosDestacados: Producto[] = [
  {
    id: "1",
    nombre: "Alimento para Perros",
    precio: 89900,
    etiqueta: "Nuevo Lanzamiento",
    imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209864/samples/ecommerce/leather-bag-gray.jpg",
    categoria: "Mascotas",
  },
  {
    id: "2",
    nombre: "Juguetes para Gatos",
    precio: 45900,
    etiqueta: "30% OFF",
    imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209864/samples/ecommerce/leather-bag-gray.jpg",
    categoria: "Mascotas",
  },
  {
    id: "3",
    nombre: "Camas para Mascotas",
    precio: 129900,
    etiqueta: "Lo más vendido",
    imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209864/samples/ecommerce/leather-bag-gray.jpg",
    categoria: "Mascotas",
  },
];

const categorias: string[] = ["Todos", "Mascotas", "Ganadería", "Equinos"];

const ProductoCard: React.FC<{ producto: Producto }> = ({ producto }) => (
  <View style={estilosProductosDestacados.productCard}>
    <Image source={{ uri: producto.imagen }} style={estilosProductosDestacados.productImage} />
    <Text style={estilosProductosDestacados.productCategory}>{producto.categoria}</Text>
    <Text style={estilosProductosDestacados.productName}>{producto.nombre}</Text>
    <Text style={estilosProductosDestacados.productPrice}>
      ${producto.precio.toLocaleString("es-CO")}
    </Text>
    <Text style={estilosProductosDestacados.offerTag}>{producto.etiqueta}</Text>
    <TouchableOpacity style={estilosProductosDestacados.viewMoreButton} activeOpacity={0.7}>
      <Text style={estilosProductosDestacados.viewMoreButtonText}>Ver más</Text>
    </TouchableOpacity>
  </View>
);

const ProductosDestacados: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todos");

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productosDestacados
      : productosDestacados.filter((producto) => producto.categoria === categoriaSeleccionada);

  return (
    <View style={estilosProductosDestacados.container}>
      <View style={estilosProductosDestacados.categoriasContainer}>
        {categorias.map((categoria) => (
          <TouchableOpacity
            key={categoria}
            style={[
              estilosProductosDestacados.categoriaButton,
              categoriaSeleccionada === categoria && estilosProductosDestacados.categoriaButtonSelected,
            ]}
            onPress={() => setCategoriaSeleccionada(categoria)}
          >
            <Text
              style={[
                estilosProductosDestacados.categoriaText,
                categoriaSeleccionada === categoria && estilosProductosDestacados.categoriaTextSelected,
              ]}
            >
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductoCard producto={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={estilosProductosDestacados.productsContainer}
      />
    </View>
  );
};

export default ProductosDestacados;
