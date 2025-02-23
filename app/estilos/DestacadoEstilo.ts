import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const estilosProductosDestacados = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#f8f9fa",
  },
  categoriasContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  categoriaButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#007bff",
  },
  categoriaButtonSelected: {
    backgroundColor: "#007bff",
  },
  categoriaText: {
    fontSize: 14,
    color: "#007bff",
  },
  categoriaTextSelected: {
    color: "#fff",
  },
  productsContainer: {
    paddingHorizontal: 10,
  },
  productCard: {
    width: width * 0.45,
    marginHorizontal: 5,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  productImage: {
    width: "80%",
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
    resizeMode: "contain",
  },
  productCategory: {
    fontSize: 12,
    color: "#666",
    marginBottom: 3,
    textAlign: "center",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
  },
  productPrice: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
    textAlign: "center",
  },
  offerTag: {
    fontSize: 12,
    color: "#28a745",
    textAlign: "center",
    marginBottom: 5,
  },
  viewMoreButton: {
    backgroundColor: "#007bff",
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
    width: "90%",
  },
  viewMoreButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default estilosProductosDestacados;
