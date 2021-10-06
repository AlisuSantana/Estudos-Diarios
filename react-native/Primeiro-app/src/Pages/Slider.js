import React, { Component } from 'react';
import {  
View, 
Text, 
Linking, 
Button } 
from 'react-native';

import Header from '../Components/Header';
import Slider from '@react-native-community/slider';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            sliderValue:5
        };
    };
    render() {
        return (
            <>
            <View>
                <Header title='Slider' />
            </View>
            <View style={{flex:1, justifyContent:'center', padding:20}}>
                <Text style={{fontSize:20}}> Temperatura: {this.state.sliderValue} </Text>
            </View>
            <Slider
            minimumValue={-6}
            maximumValue={40}
            step={2}
            minimumTrackTintColor='red'
            maximumTrackTintColor='blue'
            value={this.state.sliderValue}
            onValueChange={temp => this.setState({sliderValue: temp})}
            />
            <View style={{  flex:1, justifyContent:'center', margin:10 }}>
                <Button 
                style={{ marginTop: 15 }}
                title='Visualizar mais Propriedades de Slider'
                onPress={() => {
                    Linking.openURL('https://github.com/react-native-community/react-native-slider');
                }}
                />
            </View>
            </>
        );
    }
}