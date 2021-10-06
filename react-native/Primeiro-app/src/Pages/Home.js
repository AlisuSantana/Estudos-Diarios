import React, { Component } from 'react';
import {  View,ToastAndroid, Button, Linking, Platform } from 'react-native';

import Header from '../Components/Header';
import * as Animatable from 'react-native-animatable';

export default function photos() {
    
  function ToastComDuracao() {
    ToastAndroid.show('Toast com duração...', 
    ToastAndroid.SHORT
    );
  }
  function ToastComPosicionamento() {
    ToastAndroid.showWithGravity(
      'Toast com posicionamento...', 
      ToastAndroid.SHORT, 
      ToastAndroid.CENTER
      );
  }
  function ToastComDeslocamento() {
    ToastAndroid.showWithGravityAndOffset(
      'Toast com descolamento',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      500
    );
  }
    return (
    <>
      <View> 
        <Header title="First App" />
      </View> 
      
      <View style={{ flexDirection:'column', justifyContent:'flex-start', alignItems:'center' }}>
        <View style={{ width:'95%', marginTop:15 }}>
          <Button title='Toast com duração' onPress={ToastComDuracao} />
        </View>
        <View style={{ width:'95%', marginTop:15 }}>
          <Button title='Toast com posicionamento' onPress={ToastComPosicionamento} />
        </View>
        <View style={{ width:'95%', marginTop:15 }}>
          <Button title='Toast com descolamento' onPress={ToastComDeslocamento} />
        </View>
      </View>

      <View style={{ flex:1, flexDirection:'row', justifyContent:'center', alignItems:"center"}}>
        <Animatable.Image
        style={{margin:10, width:'100%', height:'30%'}}
        source={require('../../assets/img/porquinho.gif')}
        animation='shake'
        useNativeDriver
        duration={5000}
        iterationCount={Infinity}
        />
      </View>
      <View style={{ flexDirection: 'column', justifyContent:'flex-end', alignItems:'center' }}>
             <View style={{ width:'95%', marginTop: 10 }}>
                <Button 
                title='Enviar E-mail'
                onPress={() => {
                    Linking.openURL('mailto:santana.allyson88@gmail.com');
                }}
                />
              </View>
              <View style={{ marginTop: 10, width:'95%' }}>
                <Button 
                title='Enviar msg no whatsapp'
                onPress={() => {
                    Linking.openURL('https://api.whatsapp.com/send?phone=5513988289998');
                }}
                />
              </View>
              <View style={{ marginTop: 10, width:'95%' }}>
                <Button 
                title='Maps - Location'
                onPress={() => {
                    if(Platform.OS === 'ios') {
                      Linking.openURL('http://maps.apple.com/?ll=-23.963480, -46.384168');
                    }
                    else{
                      Linking.openURL('geo:-23.963480, -46.384168');
                    }
                }}
                />
              </View>
       </View>
    </>
    );
};