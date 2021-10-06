import React, { useState } from 'react';
import {  
View, 
Text, 
TouchableOpacity, 
TextInput, 
Alert, 
StyleSheet,
} from 'react-native';
import Header from '../Components/Header';



export default function Update( {route, navigation} ) {

    const id = route.params.Id;
    const [nome, setNome] = useState(route.params.Nome);
    const [email, setEmail] = useState(route.params.Email);
    const [fone, setFone] = useState(route.params.Fone);

    const AtualizaUser = () => {
        fetch('http://10.0.0.1/Primeiro-app/src/Requests/Update.php', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                Rm: id,
                Nome: nome,
                Email: email,
                Fone: fone
            } )
        } ).then( (response) => response.json() )
           .then( (responseJson) => {
               Alert.alert(responseJson);
           } ).catch( (error) => {
               console.log(error);
           } );
            navigation.navigate('Show');           
    }
    const DeletaUser = () => {
        fetch('http://10.0.0.1/Primeiro-app/src/Requests/Delete.php', { // Verifica se o ip WLAN corresponde 
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                Rm: id
            } )
        } ).then( (response) => response.json() )
           .then( (responseJson) => {
            Alert.alert(responseJson);
           } ).catch( (error) => {
                console.error(error);
           } );
           navigation.navigate('Show')
    }

    return(
        <>
         {/* <View>
            <Header title='UP e DEL' />
        </View> */}
        <View style={styles.container}>
            <Text style={{ fontSize:40, textAlign:'center', marginBottom:20, color:'#fff' }}> Atualizar usuário </Text>
            <TextInput 
            style={styles.input}        
            placeholder='Nome do usuario'
            value={nome}
            onChangeText={ valueTextInput => setNome(valueTextInput) }
            underlineColorAndroid='transparent'
            />
            <TextInput 
            style={styles.input}        
            placeholder='E-mail do usuario'
            value={email}
            onChangeText={ valueTextInput => setEmail(valueTextInput) }
            underlineColorAndroid='transparent'
            />
            <TextInput
            style={styles.input}
            placeholder='Fone de usuario'
            value={fone}
            onChangeText={ valueTextInput => setFone(valueTextInput) }
            underlineColorAndroid='transparent'
            />
            <TouchableOpacity style={styles.btn} activeOpacity={.4} onPress={ AtualizaUser }>
                <Text style={{ fontSize:20, textAlign:'center', color:'white' }}> Atualizar </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} activeOpacity={.4} onPress={ DeletaUser }>
                <Text style={{ fontSize:20, textAlign:'center', color:'white' }}> Deletar </Text>
            </TouchableOpacity>
        </View>

        </>
    )
    
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
        marginBottom:25,
    },
});

