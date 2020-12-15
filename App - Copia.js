import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component{
  render(){

    let nome = 'Soares';
    

    return(
      <View>
        <Text>Olá Mundo</Text>
        <Text>Meu primeiro App</Text>
        <Text style={{ color: 'red', fontSize: 25 }}>Willian Mertins Soares</Text>
        <Text>{nome}</Text>
        <Jobs Largura={100} altura={200} nome="STEVE Jobs"/>      
      </View>
    );
  }
}

class Jobs extends Component{
  render(){
    let img = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Image  source={{ uri: img }}
                style={{width: this.props.Largura, height:this.props.altura}}     
        />
        <Text>{this.props.nome}</Text>
      </View>
    );
  }
}

