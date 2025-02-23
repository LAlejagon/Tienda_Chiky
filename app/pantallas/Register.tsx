import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import estilosRegister  from "@estilos/RegisterEstilo";

// Tipo para la navegación
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">;

const Register = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = async () => {
    // Validar campos vacíos
    if (!form.nombre || !form.correo || !form.contraseña || !form.confirmarContraseña) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    // Validar que las contraseñas coincidan
    if (form.contraseña !== form.confirmarContraseña) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    // Guardar el usuario en AsyncStorage
    const usuario = {
      nombre: form.nombre,
      email: form.correo,
      password: form.contraseña,
    };

    try {
      await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
      Alert.alert("Éxito", "Cuenta creada correctamente.");
      navigation.navigate("Login"); // Navegar a la pantalla de inicio de sesión
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
      Alert.alert("Error", "No se pudo crear la cuenta.");
    }
  };

  return (
    <LinearGradient
      colors={["#ffffff", "#f0f0f0"]} // Fondo claro con gradiente sutil
      style={estilosRegister.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={estilosRegister.contenedor}
      >
        {/* Título */}
        <Text style={estilosRegister.titulo}>Crea tu cuenta</Text>
        <Text style={estilosRegister.subtitulo}>Regístrate para continuar</Text>

        {/* Campo: Nombre */}
        <View style={estilosRegister.inputContainer}>
          <Icon name="user" size={20} color="#666" style={estilosRegister.icon} />
          <TextInput
            style={estilosRegister.input}
            placeholder="Nombre completo"
            placeholderTextColor="#999"
            value={form.nombre}
            onChangeText={(text) => handleChange("nombre", text)}
          />
        </View>

        {/* Campo: Correo electrónico */}
        <View style={estilosRegister.inputContainer}>
          <Icon name="envelope" size={20} color="#666" style={estilosRegister.icon} />
          <TextInput
            style={estilosRegister.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={form.correo}
            onChangeText={(text) => handleChange("correo", text)}
          />
        </View>

        {/* Campo: Contraseña */}
        <View style={estilosRegister.inputContainer}>
          <Icon name="lock" size={24} color="#666" style={estilosRegister.icon} />
          <TextInput
            style={estilosRegister.input}
            placeholder="Contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            value={form.contraseña}
            onChangeText={(text) => handleChange("contraseña", text)}
          />
        </View>

        {/* Campo: Confirmar contraseña */}
        <View style={estilosRegister.inputContainer}>
          <Icon name="lock" size={24} color="#666" style={estilosRegister.icon} />
          <TextInput
            style={estilosRegister.input}
            placeholder="Confirmar contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            value={form.confirmarContraseña}
            onChangeText={(text) => handleChange("confirmarContraseña", text)}
          />
        </View>

        {/* Botón: Registrarse */}
        <TouchableOpacity style={estilosRegister.boton} onPress={handleRegister}>
          <Text style={estilosRegister.textoBoton}>Registrarse</Text>
        </TouchableOpacity>

        {/* Enlace: Iniciar sesión */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={estilosRegister.textoLink}>¿Ya tienes cuenta? <Text style={estilosRegister.textoLinkBold}>Inicia sesión</Text></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Register;