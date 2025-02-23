// src/pantallas/Contacto.tsx
import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Header from "@componentes/Header";
import { estilosContacto } from "@estilos/ContactoEstilo";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";

type ContactoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Contacto">;

interface ContactoProps {
  navigation: ContactoScreenNavigationProp;
}

const Contacto: React.FC<ContactoProps> = ({ navigation }) => {
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
    <ScrollView contentContainerStyle={estilosContacto.contenedor}>
      <Header
        onCartPress={handleCartPress}
        onSearch={handleSearch}
        onNavigate={handleNavigate}
      />
      <Text style={estilosContacto.titulo}>Contacto</Text>
      <Text style={estilosContacto.subtitulo}>
        ¿Tienes alguna pregunta? ¡Escríbenos!
      </Text>

      <TextInput
        style={estilosContacto.input}
        placeholder="Nombre"
        placeholderTextColor="#999"
      />
      <TextInput
        style={estilosContacto.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
      <TextInput
        style={[estilosContacto.input, estilosContacto.inputMensaje]}
        placeholder="Mensaje"
        placeholderTextColor="#999"
        multiline
      />

      <TouchableOpacity style={estilosContacto.boton}>
        <Text style={estilosContacto.textoBoton}>Enviar Mensaje</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Contacto;