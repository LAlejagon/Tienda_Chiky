import { StyleSheet } from 'react-native';

const estilosRegister = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Fondo claro para el gradiente
  },
  contenedor: {
    width: '90%',
    maxWidth: 400,
    padding: 25,
    backgroundColor: '#fff', // Fondo blanco para el contenedor
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Texto oscuro para el título
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666', // Texto gris para el subtítulo
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Fondo gris claro para los inputs
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    marginRight: 10,
    color: '#666', // Color gris para los íconos
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333', // Texto oscuro para los inputs
  },
  boton: {
    backgroundColor: '#6a11cb', // Fondo morado para el botón
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#6a11cb',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  textoBoton: {
    color: '#fff', // Texto blanco para el botón
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoLink: {
    color: '#666', // Texto gris para el enlace
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  textoLinkBold: {
    fontWeight: 'bold',
    color: '#6a11cb', // Texto morado para el enlace en negrita
  },
});

export default estilosRegister;