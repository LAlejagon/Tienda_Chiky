import { View, Text, Image, StyleSheet } from "react-native";

export function TarjetaProducto({ nombre, precio, imagen }: { nombre: string; precio: string; imagen: string }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.precio}>{precio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 10, margin: 10, borderRadius: 10, alignItems: "center" },
  imagen: { width: 100, height: 100, borderRadius: 10 },
  nombre: { fontSize: 18, fontWeight: "bold" },
  precio: { fontSize: 16, color: "#888" },
});
