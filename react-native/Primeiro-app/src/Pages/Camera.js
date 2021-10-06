import React, { useState, useEffect, useRef } from 'react';
import { 
  Linking, Text, 
  View, TouchableOpacity,
  SafeAreaView, Modal, 
  Image, Button
} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from 'react-native-vector-icons';
import Header from '../Components/Header';


export default function App() {
    // tipo de camera | frontal ou traseira
    const [type, setType] = useState(Camera.Constants.Type.back);
    // pedi permissão para utiliza a camera 
    const [hasPermission, setHasPermission] = useState(null);
    //referência da camera
    const camref = useRef(null);
    // indica se a foto foi ou não capturada
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    //indica a abertura ou fechamento do modal
    const [open, setOpen] = useState(false);

    useEffect( () => {
        (async () => {
            // Armazena o status da quantidade de acesso a camera
            const { status } = await Camera.requestPermissionsAsync();
            // se o status for permitido, retorna true para o state hasPermission
            setHasPermission(status === 'granted'); 
        })();
    }, []);
    
    if(hasPermission === null){
        // retorna uma view vazia
           return <View />;
    }
    if(hasPermission === false){
        // retorna um Text com uma meg
        return <Text> Acesso Negado! </Text>        
    }
    async function PrintPhoto() {
        // verificar se a câmera está referenciada
        if(camref){
            // armazena todas as infors da foto
            const data = await camref.current.takePictureAsync();
            // retorna o caminho temporario de onde a foto foi salva
            setCapturedPhoto(data.uri);
            // retorna true para o state
            setOpen(true);
            // exibi as infors da foto no console
            console.log(data);
        }
    }

    return (
        <>
        <SafeAreaView style={{ flex:1, justifyContent:'center' }}>
        <View>
             <Header title='Camera' />
        </View>
            <Camera style={{ flex:1 }} type={type} ref={camref}>
                <View style={{ flex:1, backgroundColor:'transparent', flexDirection:'row', 
                    justifyContent:'center', alignItems:'flex-end' }}>
                    <TouchableOpacity
                    style={{ position:'absolute', bottom:20, left: 20, 
                        padding:5, backgroundColor:'#121212', borderRadius:15 }}
                    onPress={ () => {
                        setType(
                            type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                    } }                    
                    >
                        <Text style={{ fontSize:20, color:'#fff' }}> Trocar </Text>                        
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{ justifyContent:'center', alignItems:'center', height:50,
                         margin:20, borderRadius:10 }} 
                    onPress={PrintPhoto}
                    >
                        <FontAwesome name='camera' size={30} color='#fff' />
                    </TouchableOpacity>
                    {capturedPhoto &&
                        <Modal
                        animationType='slide'
                        transparent={false}
                        visible={open}
                        >
                            <View style={{ flex:1, justifyContent:'center', alignItems:'center', margin:20 }}>
                                <Image 
                                style={{ width:'100%', height:300, 
                                    borderRadius:20 }}
                                source={{ uri: capturedPhoto }}
                                />
                                <TouchableOpacity 
                                style={{ margin:15 }}
                                onPress={ () => { setOpen(false) } }
                                >
                                    <FontAwesome name='window-close' size={50} color='#ff0000' />
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    }
                </View>
            </Camera>
            <View 
            style={{ marginTop:10 }}>
            <Button 
            title='Enviar E-mail'
                onPress={() => {
                    Linking.openURL('https://docs.expo.io/versions/latest/sdk/camera/');
                }}
                />
            </View>
        </SafeAreaView>
        </>
    );


}


