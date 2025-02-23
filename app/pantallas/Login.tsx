import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@navegación/Types";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import estilosLogin from "@estilos/LoginEstilo";

// Esquema de validación con Yup
const schema = yup.object().shape({
  email: yup.string().email("Correo inválido").required("Campo obligatorio"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Campo obligatorio"),
});

// Tipo para la navegación
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const storedUser = await AsyncStorage.getItem("usuario");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === data.email && user.password === data.password) {
          Alert.alert("Inicio de sesión exitoso");
          navigation.navigate("Inicio"); // Navegar a la pantalla "Inicio"
        } else {
          Alert.alert("Credenciales incorrectas");
        }
      } else {
        Alert.alert("No hay usuarios registrados");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <LinearGradient
      colors={["#ffffff", "#f0f0f0"]} // Fondo claro con gradiente sutil
      style={estilosLogin.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={estilosLogin.contenedor}
      >
        {/* Logo o Título */}
        <Text style={estilosLogin.titulo}>Bienvenido</Text>
        <Text style={estilosLogin.subtitulo}>Inicia sesión para continuar</Text>

        {/* Campo: Correo electrónico */}
        <View style={estilosLogin.inputContainer}>
          <Icon name="envelope" size={20} color="#666" style={estilosLogin.icon} />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={estilosLogin.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#999"
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.email && <Text style={estilosLogin.error}>{errors.email.message}</Text>}

        {/* Campo: Contraseña */}
        <View style={estilosLogin.inputContainer}>
          <Icon name="lock" size={24} color="#666" style={estilosLogin.icon} />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={estilosLogin.input}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.password && <Text style={estilosLogin.error}>{errors.password.message}</Text>}

        {/* Botón: Ingresar */}
        <TouchableOpacity style={estilosLogin.boton} onPress={handleSubmit(onSubmit)}>
          <Text style={estilosLogin.textoBoton}>Ingresar</Text>
        </TouchableOpacity>

        {/* Enlace: ¿No tienes cuenta? Regístrate */}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={estilosLogin.textoLink}>¿No tienes cuenta? <Text style={estilosLogin.textoLinkBold}>Regístrate</Text></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;