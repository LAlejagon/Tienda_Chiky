import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { estilosHeader } from "@estilos/HeaderEstilo";
import { RootStackParamList } from "@navegación/Types";

type HeaderProps = {
  onCartPress: () => void;
  onSearch: (query: string) => void;
  onNavigate: (screen: keyof RootStackParamList) => void;
};

const Header: React.FC<HeaderProps> = ({ onCartPress, onSearch, onNavigate }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <View style={estilosHeader.contenedor}>
      {/* Logo + Nombre */}
      <TouchableOpacity onPress={() => onNavigate("Inicio")} style={estilosHeader.logoContainer}>
        <FontAwesome5 name="paw" size={24} color="#ff9800" />
        <Text style={estilosHeader.titulo}>Tienda Chiki</Text>
      </TouchableOpacity>

      {/* Barra de Búsqueda Reducida y Centrada */}
      <View style={estilosHeader.barraBusqueda}>
        <TextInput
          style={estilosHeader.inputBusqueda}
          placeholder="Buscar..."
          placeholderTextColor="#777"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch} style={estilosHeader.botonBusqueda}>
          <MaterialIcons name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Iconos de Navegación con Nombres */}
      <View style={estilosHeader.iconos}>
        <TouchableOpacity onPress={() => onNavigate("Productos")} style={estilosHeader.icono}>
          <Ionicons name="shirt-outline" size={22} color="#007bff" />
          <Text style={estilosHeader.textoIcono}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate("Oferta")} style={estilosHeader.icono}>
          <MaterialIcons name="local-offer" size={22} color="#28a745" />
          <Text style={estilosHeader.textoIcono}>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate("Contacto")} style={estilosHeader.icono}>
          <MaterialIcons name="contact-mail" size={22} color="#ff5722" />
          <Text style={estilosHeader.textoIcono}>Contacto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCartPress} style={estilosHeader.icono}>
          <Ionicons name="cart-outline" size={22} color="#673ab7" />
          <Text style={estilosHeader.textoIcono}>Carrito</Text>
        </TouchableOpacity>
        
        {/* Botón de "Iniciar sesión" */}
        <TouchableOpacity onPress={() => onNavigate("Login")} style={estilosHeader.icono}>
          <Ionicons name="log-in-outline" size={22} color="#673ab7" />
          <Text style={estilosHeader.textoIcono}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
