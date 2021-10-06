import React from 'react';
import View from 'react-native';

import Calculadora from './src/Pages/Calculadora';
import Home from './src/Pages/Home';
import Photos from './src/Pages/Photos';
import Storage from './src/Pages/Storage';
import Slider from './src/Pages/Slider';
import Grafico from './src/Pages/Grafico';
import Camera from './src/Pages/Camera';
import CadastroUser from './src/Pages/Insert';
import navShow from './src/Pages/navShow';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
    <>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
        initialRouteName='Home' 
        screenOptions={({route}) => ({
          drawerIcon: ({ focused, color, size }) => {
            let IconName;
            let IconCor;
            if(route.name === "Home"){
              IconName = focused ? "home" : "home";
              IconCor = focused ? 'blue' : color;
            } 
            else if(route.name === "Calculadora"){
              IconName = focused ? "calculator" : "calculator";
              IconCor = focused ? 'blue' :  color;
            }
            else if(route.name === "Photos"){
              IconName = focused ? "photo" : "photo";
              IconCor = focused ? "blue" : color;
            }   
            else if(route.name === "Storage"){
              IconName = focused ? "tags" : "tags";
              IconCor = focused ? "blue" : color;
            }
            else if(route.name === "Slider"){
              IconName = focused ? "sliders" : "sliders";
              IconCor = focused ? "blue" : color;
            }  
            else if(route.name === "Grafico"){
              IconName = focused ? "pie-chart" : "pie-chart";
              IconCor = focused ? "blue" : color;
            }  
            else if(route.name === "Camera"){
              IconName = focused ? "camera" : "camera";
              IconCor = focused ? "blue" : color;
            } 
            else if(route.name === "Cadastro"){
              IconName = focused ? "user" : "user";
              IconCor = focused ? "blue" : color;
            }  
            else if(route.name === "Usuarios"){
              IconName = focused ? "users" : "users";
              IconCor = focused ? "blue" : color;
            }      
            return <Icon name={IconName} color={IconCor} size={size} />
          },
        })}        
        drawerContentOptions={{ 
          labelStyle:{ 
            fontSize: 20,
            color: 'white',
          } 
        }}
        drawerStyle={{ 
          backgroundColor: '#56A9E8', 
          width: 225,
        }}
        >
  
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Calculadora" component={Calculadora} />
        <Drawer.Screen name="Photos" component={Photos} />
        <Drawer.Screen name="Storage" component={Storage} />
        <Drawer.Screen name="Slider" component={Slider} />
        <Drawer.Screen name="Grafico" component={Grafico} />
        <Drawer.Screen name="Camera" component={Camera} />
        <Drawer.Screen name="Cadastro" component={CadastroUser} />
        <Drawer.Screen name="Usuarios" component={navShow} />
        </Drawer.Navigator>     
    </NavigationContainer>

    </>
  );  
};
