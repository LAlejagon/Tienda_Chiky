import { StyleSheet } from "react-native";

export const estilosEncabezado = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ff914d",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  carritoIcono: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
});
