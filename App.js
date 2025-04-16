//2. Simulador de Pedágio
//Crie um aplicativo onde o usuário informe:
//●       Tipo de veículo (Carro, Moto, Caminhão)
//●       Distância percorrida (em km)
//O pedágio é cobrado com base no tipo de veículo:
//       Carro: R$ 0,10 por km
//●       Moto: R$ 0,05 por km
//●       Caminhão: R$ 0,15 por km
//O app deve exibir o total a pagar.
//Exemplo:
//●       Tipo: Carro
//       Distância: 200 km
//●       Total: R$ 20,00

import {SafeAreaView, StyleSheet, TextInput } from 'react-native';
import {useState} from 'react';
import Total from './components/Total';

export default function App() {
  const [Distância, setDistancia] = useState("")
  const [Veiculo, setVeiculo] = useState("")
  const [Kilometragem, setKilometragem] = useState("")
  const [Total, setTotal] = useState("")
  return (
    <SafeAreaView style ={StyleSheet.container}> 
      <TextInput style={styles.input} value={Veiculo} onChangeText={setVeiculo}>Diga quão o tipo do veiculo utilizado</TextInput>
      <TextInput style={styles.input} value={Distância} onChangeText={setDistancia}>Diga O Quão Longe é a distancia da viagem</TextInput>
      <TextInput style={styles.input} value={Kilometragem} onChangeText={setKilometragem}>Diga Quantos Kilometros foram percorridos</TextInput>

      <Total Total = {+Distância} Veiculo = {Kilometragem}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
