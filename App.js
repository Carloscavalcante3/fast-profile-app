import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, Alert, ScrollView, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [fotoAtual, setFotoAtual] = useState('https://avatar.iran.liara.run/public/30');

  function botaoSalvar() {
    if (nomeUsuario === '') {
      Alert.alert('Atenção', 'Por favor, digite um nome antes de salvar.');
    } else {
      Alert.alert('Sucesso', 'O perfil de ' + nomeUsuario + ' foi salvo!');
    }
  }

  function trocarFoto() {
    if (fotoAtual === 'https://avatar.iran.liara.run/public/30') {
      setFotoAtual('https://avatar.iran.liara.run/public/70');
    } else {
      setFotoAtual('https://avatar.iran.liara.run/public/30');
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.sessaoFoto}>
          <Image 
            source={{ uri: fotoAtual }} 
            style={styles.fotoPerfil} 
            resizeMode="cover"
          />
          <Button title="Trocar Imagem" onPress={trocarFoto} color="#6200EE" />
        </View>

        <View style={styles.sessaoInput}>
          <Text style={styles.label}>Nome do Perfil:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome aqui..."
            value={nomeUsuario}
            onChangeText={(texto) => setNomeUsuario(texto)}
          />
        </View>

        <View style={styles.sessaoBotao}>
          <TouchableOpacity style={styles.botaoPrincipal} onPress={botaoSalvar}>
            <Text style={styles.textoBotao}>SALVAR PERFIL</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}