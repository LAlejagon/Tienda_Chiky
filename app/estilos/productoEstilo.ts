// src/estilos/productoEstilo.ts
import { StyleSheet } from "react-native";

export const estilosProductos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  lista: {
    paddingBottom: 20,
  },
  tarjeta: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  precio: {
    fontSize: 14,
    color: "#ff914d",
    fontWeight: "bold",
    marginBottom: 10,
  },
  etiquetaOferta: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#ff4757",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  botonAgregar: {
    backgroundColor: "#ff914d",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  mensajeVacio: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
});