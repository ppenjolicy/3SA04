import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style ={{textAlign: 'center', fontSize: 30, color: 'white'}}>{"\n"}{this.props.main}</Text>
                <Text style ={{textAlign: 'center', fontSize: 20, color: 'white'}}>{"\n"}{this.props.description}</Text>
                <Text style ={{textAlign: 'center', fontSize: 30, color: 'white'}}>{"\n"}{this.props.temp} °C</Text>
            </View>
        );
    }
}
