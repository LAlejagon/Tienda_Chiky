// src/estilos/ConocenosEstilo.ts
import { StyleSheet } from "react-native";

export const estilosConocenos = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  imagen: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
  },
});