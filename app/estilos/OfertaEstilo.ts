// src/estilos/OfertaEstilo.ts
import { StyleSheet } from "react-native";

export const estilosOferta = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  tarjeta: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  precio: {
    fontSize: 14,
    color: "#ff914d",
  },
});