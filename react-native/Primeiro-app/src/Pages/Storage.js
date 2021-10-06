import React, { Component } from 'react';

import {  
View, 
Text, 
TextInput,
TouchableOpacity, 
StyleSheet 
} from 'react-native';

import Header from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setNome: '',
            getNome: ''
        };
    }
    saveNome = () => {
        if(this.state.setNome) {
            AsyncStorage.setItem('key_nome', this.state.setNome);
            this.setState({ setNome: '' });
            alert('Dado salvo com sucesso!');
        }
        else{
            alert('Insira algum dado no campo');
        }
    };
    readNome = () => {
        AsyncStorage.getItem('key_nome').then(
            value => this.setState({ getNome: value })
        );
    };

    render() {
        return(
            <>
            <View>
                <Header title='Storage' />
            </View>
            <View style={styles.container}>
                <TextInput style={styles.input}
                placeholder='Digite seu dado!'
                value={this.state.setNome}
                onChangeText={nome => this.setState({ setNome: nome })} 
                />
                <TouchableOpacity style={styles.button} onPress={this.saveNome}>
                    <Text style={styles.buttonText}> Salvar meu dado </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.readNome}>
                    <Text style={styles.buttonText}> ler meu dado </Text>
                </TouchableOpacity>
                <Text style={styles.nomeText}> {this.state.getNome} </Text>
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:20
},
input: {
    textAlign:'center',
    fontSize: 20,
    width:'95%',
    padding:15,
    borderWidth:1,
    borderRadius:20,
    borderColor:'black'    
},
button: {
    width:'80%',
    height: 50,
    padding: 12,
    marginTop: 15,
    backgroundColor:'darkblue',
    borderRadius:20,
},
buttonText: {
    textAlign:'center',
    color:'white', 
    fontSize:18
},
nomeText: {
    textAlign:'center',
    fontSize:18,
    marginTop:35
}
});
