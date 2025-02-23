import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { estilosPerfil } from "@estilos/PerfilEstilo";

const Perfil = () => {
  // Datos de ejemplo
  const usuario = {
    nombre: "Juan Pérez",
    correo: "juanperez@email.com",
    foto: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209862/samples/animals/cat.jpg",
    mascotas: [
      { id: "1", nombre: "Max", tipo: "Perro" },
      { id: "2", nombre: "Luna", tipo: "Gato" },
    ],
    comprasRecientes: [
      {
        id: "1",
        nombre: "Comida Premium para Perros",
        imagen: "https://res.cloudinary.com/dummqa49l/image/upload/v1739209863/samples/animals/three-dogs.jpg",
        precio: 89900,
      },
      {
        id: "2",
        nombre: "Juguete para Gatos",
        imagen: "https://via.placeholder.com/60",
        precio: 15900,
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={estilosPerfil.contenedor}>
      {/* Encabezado con foto, nombre y correo */}
      <View style={estilosPerfil.encabezado}>
        <Image
          source={{ uri: usuario.foto }}
          style={estilosPerfil.fotoPerfil}
        />
        <Text style={estilosPerfil.nombreUsuario}>{usuario.nombre}</Text>
        <Text style={estilosPerfil.correoUsuario}>{usuario.correo}</Text>
      </View>

      {/* Sección de mascotas */}
      <View style={estilosPerfil.cardContainer}>
        <Text style={estilosPerfil.tituloSeccion}>Mis Mascotas</Text>
        <View style={estilosPerfil.mascotasContainer}>
          {usuario.mascotas.map((mascota) => (
            <View key={mascota.id} style={estilosPerfil.mascotaCard}>
              <FontAwesome5
                name={mascota.tipo === "Perro" ? "dog" : "cat"}
                size={24}
                color="#FFF"
              />
              <Text style={estilosPerfil.nombreMascota}>{mascota.nombre}</Text>
              <Text style={estilosPerfil.tipoMascota}>{mascota.tipo}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Compras recientes */}
      <View style={estilosPerfil.cardContainer}>
        <Text style={estilosPerfil.tituloSeccion}>Compras Recientes</Text>
        {usuario.comprasRecientes.map((compra) => (
          <View key={compra.id} style={estilosPerfil.compraReciente}>
            <Image
              source={{ uri: compra.imagen }}
              style={estilosPerfil.imagenProducto}
            />
            <View style={estilosPerfil.detalleCompra}>
              <Text style={estilosPerfil.nombreProducto}>{compra.nombre}</Text>
              <Text style={estilosPerfil.precioProducto}>
                ${compra.precio.toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Botones de acción */}
      <View style={estilosPerfil.botones}>
        <TouchableOpacity style={estilosPerfil.boton}>
          <MaterialIcons name="edit" size={20} color="#FFF" />
          <Text style={estilosPerfil.textoBoton}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[estilosPerfil.boton, estilosPerfil.botonCerrarSesion]}>
          <MaterialIcons name="logout" size={20} color="#FFF" />
          <Text style={estilosPerfil.textoBoton}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Perfil;