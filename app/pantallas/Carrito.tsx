import { View, Text, StyleSheet } from "react-native";

export function Carrito() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Carrito de Compras 🛒</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  texto: { fontSize: 20, fontWeight: "bold" },
});
