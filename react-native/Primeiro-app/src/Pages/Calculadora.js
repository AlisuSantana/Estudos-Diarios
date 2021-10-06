import React, { Component } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity  
} from 'react-native';

import Header from '../Components/Header';

export default class Calculadora extends Component {
  constructor(props){
    super(props)
    this.state = {
      num1:0, 
      num2:0, 
      resulSomar:0, 
      resulSubtrair:0, 
      resulDividir:0, 
      resulMultiplicar:0, 
      resulPorcentagem:0, 
      resulText:''
    }
    this.calcular = this.calcular.bind(this)
  }
  calcular() {
    let n1 = parseFloat(this.state.num1)
    let n2 = parseFloat(this.state.num2)
    let Somar = n1 + n2
    let Subtrair = n1 - n2
    let Dividir = n1 / n2
    let Multiplicar = n1 * n2
    let porcentagem = (n1 * n2) / 100

  let s = this.state

  s.resulSomar = Somar
  s.resulSubtrair = Subtrair
  s.resulDividir = Dividir
  s.resulMultiplicar = Multiplicar
  s.resulPorcentagem = porcentagem

  this.setState(s)
}

  render()  {
    return (
      <>
      <View> 
        <Header title="Calculadora" />
      </View>
      
      <View style={styles.entradas}>
        <TextInput placeholder="1 Número" keyboardType="numeric" 
          style={styles.input} onChangeText={num1=>this.setState({num1})}> </TextInput>
        <TextInput placeholder="2 Número" keyboardType="numeric" 
          style={styles.input} onChangeText={num2=>this.setState({num2})}> </TextInput>
      </View>

        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}> Calcular </Text>
        </TouchableOpacity>
      
        <Text style={styles.resultado}>Adição: {this.state.resulSomar.toFixed(2)} </Text>
        <Text style={styles.resultado}>Subtração: {this.state.resulSubtrair.toFixed(2)} </Text>
        <Text style={styles.resultado}>Divisão: {this.state.resulDividir.toFixed(2)} </Text>
        <Text style={styles.resultado}>Multiplicação: {this.state.resulMultiplicar.toFixed(2)} </Text>
        <Text style={styles.resultado}>Porcentagem: {this.state.resulPorcentagem.toFixed(2)} </Text>
        {/* <Text style={[styles.resultado, {fontSize: 35}]}> {this.state.resultadoText} </Text> */}
      </>
    )};
};

const styles = StyleSheet.create({
input:{
  height: 80,
  textAlign:'center',
  width: '50%',
  fontSize: 25,
  marginTop: 10,
},
button:{
  backgroundColor: 'blue',
  padding: 15
},
entradas:{
  flexDirection:'row',
  marginTop: 15,
}, 
buttonText:{
  alignSelf:'center',
  padding: 5,
  fontSize: 25,
  color: '#6dc4a4',
  fontWeight: 'bold',
},
resultado:{
  alignSelf: 'flex-start',
  color: 'lightgray',
  fontSize: 25,
  padding:18,
},
img:{
  width: 80, 
  resizeMode: 'contain'
}
});

