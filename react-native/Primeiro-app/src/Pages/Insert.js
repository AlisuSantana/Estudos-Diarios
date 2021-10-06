import React, { useEffect, useState } from 'react';
import {  
View, 
Text, 
TouchableOpacity, 
TextInput, 
Alert, 
StyleSheet,
} from 'react-native';
import Header from '../Components/Header';

export default function Insert() {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [fone, setFone] = useState(null);
    
    const InsertUser = () => {
        fetch('http://10.0.0.1/Primeiro-app/src/Requests/Insert.php', { //ATENÇÂO: Verifica se o ip WLAN corresponde 
        method:'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Nome: nome,
            Email: email,
            Fone: fone
        }) 
        }).then( (response) => response.json() )
          .then( (responseJson) => {
              Alert.alert("Cadastro de usuário",responseJson);
          }).catch( (error) => {
              console.error(error);             
            }); 
    }

    return (
    <> 
        <View>
            <Header title='CRUD' />
        </View>        
        <View style={styles.container}>
            <Text style={{ fontSize:40, textAlign:'center', marginBottom:20, color:'#fff' }}> Cadastrar usuário </Text>
            <TextInput 
            style={styles.input}        
            placeholder='Nome do usuario'
            onChangeText={ valueTextInput => setNome(valueTextInput) }
            underlineColorAndroid='transparent'
            />
            <TextInput 
            style={styles.input}        
            placeholder='E-mail do usuario'
            onChangeText={ valueTextInput => setEmail(valueTextInput) }
            underlineColorAndroid='transparent'
            />
            <TextInput
            style={styles.input}
            placeholder='Fone de usuario'
            onChangeText={ valueTextInput => setFone(valueTextInput) }
            underlineColorAndroid='transparent'
            />
            <TouchableOpacity style={styles.btn} activeOpacity={.4} onPress={ InsertUser }>
                <Text style={{ fontSize:20, textAlign:'center', color:'white' }}> Cadastrar </Text>
            </TouchableOpacity>
        </View>
    </>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30, 
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
        backgroundColor:'black',
    },
    input:{
        width:'95%',
        borderWidth: 1,
        borderColor:'white',
        borderRadius:10,
        height:50,
        marginBottom:20,
        padding:10,
        color:'black',
        fontSize:18,
        backgroundColor:'white'
    },
    btn:{
        paddingTop:10,
        paddingBottom:10,
        borderRadius:10,
        width:'95%',
        backgroundColor:'blue',
    },
});
