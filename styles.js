import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  sessaoFoto: {
    alignItems: 'center',
    marginBottom: 40,
  },
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75, // Metade do tamanho para ficar circular
    borderWidth: 2,
    borderColor: '#6200EE',
    marginBottom: 15,
  },
  sessaoInput: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sessaoBotao: {
    width: '100%',
  },
  botaoPrincipal: {
    backgroundColor: '#03DAC6',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});