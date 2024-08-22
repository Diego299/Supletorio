import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  etiqueta: {
    fontSize: 18,
    marginBottom: 8,
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  valor: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default estilos;
