import { StyleSheet } from "react-native";

export const estilosPerfil = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  encabezado: {
    alignItems: "center",
    marginBottom: 20,
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#FF914D",
    marginBottom: 10,
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  correoUsuario: {
    fontSize: 16,
    color: "#777",
  },
  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  mascotasContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mascotaCard: {
    alignItems: "center",
    backgroundColor: "#FF914D",
    padding: 15,
    borderRadius: 10,
    width: "48%",
  },
  nombreMascota: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 5,
  },
  tipoMascota: {
    fontSize: 14,
    color: "#FFF",
  },
  compraReciente: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  imagenProducto: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  detalleCompra: {
    marginLeft: 15,
    flex: 1,
  },
  nombreProducto: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  precioProducto: {
    fontSize: 14,
    color: "#FF914D",
    fontWeight: "bold",
    marginTop: 5,
  },
  botones: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF914D",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
  },
  botonCerrarSesion: {
    backgroundColor: "#FF5E00",
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
    marginLeft: 10,
  },
});