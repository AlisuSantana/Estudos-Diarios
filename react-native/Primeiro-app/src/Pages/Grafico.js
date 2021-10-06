import React from 'react';
import {  View } from 'react-native';

import Header from '../Components/Header';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

export default function App(){
    const data = [35, 20, 15, 18, 12];
    const PieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: (
                '#' + ((Math.random() * 0xffffff ) << 0 ).toString(16) + '000000'
            ).slice(0,7)
        }
    }) );

    const Label = ({ slices }) => {
        return slices.map((slice, index) => {
            const {pieCentroid, data} = slice;
            return(
                <Text 
                key={`Label-${index}`}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill='black'
                textAnchor={'middle'}
                alignmentBaseline={'middle'}
                fontSize={22}
                >
                    {data.value}%
                </Text>
            );
        } );
    }

    return(
    <>
    <View>
        <Header title='Gráfico' />
    </View>

    <View style={{flex:1, justifyContent:'center'}}>
        <PieChart style={{ height:350 }} data={PieData}>
            <Label />
        </PieChart>
    </View>

    </>
    );
}
