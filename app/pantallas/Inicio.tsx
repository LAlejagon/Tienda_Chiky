import { View, Text, StyleSheet } from "react-native";

export function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bienvenido a la Tienda de Mascotas 🐶🐱</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  texto: { fontSize: 20, fontWeight: "bold" },
});
