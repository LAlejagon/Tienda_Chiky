import { StyleSheet } from "react-native";

export const estilosHeader = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff9800",
    marginLeft: 5,
  },
  barraBusqueda: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
    paddingHorizontal: 8,
    height: 32,
    width: "40%",
  },
  inputBusqueda: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 4,
    color: "#333",
  },
  botonBusqueda: {
    backgroundColor: "#ff9800",
    padding: 5,
    borderRadius: 15,
  },
  iconos: {
    flexDirection: "row",
    alignItems: "center",
  },
  icono: {
    alignItems: "center",
    marginLeft: 12,
  },
  textoIcono: {
    fontSize: 10,
    color: "#333",
    marginTop: 2,
  },
  
  // Estilo para el botón de "Iniciar sesión"
  iniciarSesionBoton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#673ab7",  // Color de fondo del botón
  },
  textoIniciarSesion: {
    fontSize: 12,
    color: "#fff",  // Color del texto
    marginLeft: 5,
  },
});
