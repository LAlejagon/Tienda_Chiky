import { View, Text, StyleSheet } from "react-native";

export function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil de Usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  texto: { fontSize: 20, fontWeight: "bold" },
});
