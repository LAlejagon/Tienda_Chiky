import { StyleSheet } from "react-native";

export const estilosTarjetaProducto = StyleSheet.create({
  tarjeta: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    padding: 10,
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
    color: "#888",
    marginBottom: 10,
  },
  botonAgregar: {
    backgroundColor: "#ff914d",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 14,
  },
  etiquetaOferta: {
    backgroundColor: "#ff914d",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 12,
  },
});
