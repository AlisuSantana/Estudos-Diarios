import React from 'react';
import {  View, Image } from 'react-native';

import Header from '../Components/Header';
import {
  IndicatorViewPager,
  PagerDotIndicator,
  PagerTitleIndicator,
  PagerTabIndicator
} from 'react-native-best-viewpager';

export default function Photos(){

  function renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }
  function renderTitleIndicator() {
    return <PagerTitleIndicator titles={['titulo 1', 'titulo 2', 'titulo 3', 'titulo 4']} />;
  }
  function renderTabIndicator() {
    let tabs = [
      {
        text: 'Aba 1'
      },
      {
        text: 'Aba 2'
      },
      {
        text: 'Aba 3'
      },
      {
        text: 'Aba 4'
      }
    ];
    return <PagerTabIndicator tabs={tabs} />;
  }

  return(
    <>
    <View>
      <Header title='Photos' />
    </View>
      <View style={{ flex:1, justifyContent:'center' }}>        
        <IndicatorViewPager  style={{ height: '80%' }} 
          indicator={renderDotIndicator()} 
          autoPlayEnable={true}
          autoPlayInterval={3000}
          >
          <View style={{ flex:1, justifyContent:'center', alignItems:'center'  }}>
            <Image style={{ width:'90%', height:250, resizeMode: 'contain'}} 
              source={require('../../assets/img/terror.jpg')} />
               <Image style={{ width:'90%', height:250, resizeMode: 'contain' }} 
              source={require('../../assets/img/titan.jpg')} />
          </View>
          <View style={{ flex:1, justifyContent:'center', alignItems:'center'  }}>
            <Image style={{ width:'90%', height:250, resizeMode: 'contain'}} 
              source={require('../../assets/img/fate.jpg')} />
               <Image style={{ width:'90%', height:250, resizeMode: 'contain' }} 
              source={require('../../assets/img/kake.jpg')} />
          </View>
          <View style={{ flex:1, justifyContent:'center', alignItems:'center'  }}>
            <Image style={{ width:'90%', height:250, resizeMode: 'contain'}} 
              source={require('../../assets/img/mask.jpg')} />
               <Image style={{ width:'90%', height:250, resizeMode: 'contain' }} 
              source={require('../../assets/img/ichigo.jpg')} />
          </View>
          <View style={{ flex:1, justifyContent:'center', alignItems:'center'  }}>
            <Image style={{ width:'90%', height:250, resizeMode: 'contain'}} 
              source={require('../../assets/img/irmaos.jpg')} />
               <Image style={{ width:'90%', height:250, resizeMode: 'contain' }} 
              source={require('../../assets/img/yusukextoguro.jpeg')} />
          </View>
        </IndicatorViewPager>
      </View>
    </>
  );

}