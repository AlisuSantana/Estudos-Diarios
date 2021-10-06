import React, { useEffect, useState } from 'react';
import {  
View,
ScrollView, 
Text, 
TouchableOpacity, 
ActivityIndicator, 
FlatList, 
StyleSheet,
} from 'react-native';

import Header from '../Components/Header';
import  Icon  from 'react-native-vector-icons/FontAwesome5';


export default function Showw({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setdate] = useState([]);

    useEffect( () => {
        fetch('http://10.0.0.1/Primeiro-app/src/Requests/Show.php') // Verifica se o ip WLAN corresponde 
            .then( (response) => response.json() )
            .then( (response) => {
                setdate(response);
                setLoading(false);
            } )
            .catch( (error) => console.error(error) )
    }, []);

    return (
    <>
    {/* <View>
        <Header title='Usuarios' />
    </View> */}
        <View style={{ padding:10, backgroundColor:'black' }}>
        <ScrollView>
            {isLoading ?  <ActivityIndicator /> : (
                <FlatList 
                    data={data}
                    keyExtractor={ item => item.cd_user }
                    renderItem={ ({item}) => (
                        <TouchableOpacity 
                        style={styles.inputsUsers}
                        onPress={ () =>  {
                            navigation.navigate('Update',{
                                Id: item.cd_user,
                                Nome: item.nm_user,
                                Email: item.nm_email,
                                Fone: item.nm_fone
                            } );
                        } }
                        >
                            <Text style={{ fontSize:20 }} > 
                                <Icon name='user' color='black' size={30} />                           
                                {"  " + item.nm_user + "  -  " + item.nm_email }
                            </Text>
                        </TouchableOpacity>
                    ) }
                />                
            ) }
        </ScrollView>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    inputsUsers:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff',
        color:'white',
        marginBottom:15,
        padding:20,
        borderRadius:10
    }
});

