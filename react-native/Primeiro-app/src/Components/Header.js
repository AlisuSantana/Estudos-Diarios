import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { 
  StyleSheet, Text, View, Image
} from 'react-native';

import * as Animatable from 'react-native-animatable';


const Header = (props) => (
    <>
    <View style={styles.container}> 
        <Animatable.Image
        style={{margin:10}}
        source={require('../../assets/img/favicon.png')}
        animation='pulse'
        useNativeDriver
        iterationCount={Infinity} 
        />
        <Text style={styles.title}>{props.title} </Text>
    </View>
    </>
);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#6ca2f7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    title:{
        fontSize: 50,
        color: "white",
        padding: 15
    }
});

export default Header;