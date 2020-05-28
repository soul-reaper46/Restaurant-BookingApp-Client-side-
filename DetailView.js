import React, { Component } from 'react';
import {Text, View, StyleSheet, Button, TextInput}  from 'react-native';
import {Dropdown} from 'react-native-material-dropdown'
import firebase from './fb'

export default class DetailView extends  Component {
    constructor(props){
        super(props);
        this.state={
            name: this.props.navigation.state.params.name,
            Gmail: this.props.navigation.state.params.Gmail,
            Preference: this.props.navigation.state.params.Preference,
            key: this.props.navigation.state.params.key
        }
    }

    
    update=(name, Gmail, Preference, key)=>{
            firebase.database().ref().child(key).update({name, Gmail, Preference})
            this.props.navigation.goBack()
    }

    delete(key){
        
            firebase.database().ref(`${key}`).remove()
            this.props.navigation.goBack()
    }

    render() {
      let Preference = [{
        value: 'Family',
      }, {
        value: 'Couples',
      }, {
        value: 'Friends',
      }, {
        value: 'Party Hall',
      }
    ];
        console.log(this.state.Event)
        return(
          <View>
            <View style={styles.container}>
                <TextInput style={styles.input} 
                placeholder= "name" 
                placeholderTextColor='#8A8F9E'  
                keyboardType='default'  
                autoCorrect={false}      
                onChangeText={name => this.setState({name})}
                value={this.state.name}
              />
                <TextInput style={styles.input} 
                placeholder= "Gmail" 
                placeholderTextColor='#8A8F9E'  
                keyboardType='email-address'  
                autoCorrect={false}      
                onChangeText={Gmail => this.setState({Gmail})}
                value={this.state.Gmail}
              />
              <Dropdown style={{margin:60}}
                label='Preference'
                data={Preference}  
                onChangeText={Preference => this.setState({Preference})}
                value={this.state.Preference}

              />
              </View>
              <View style={[{ width: "40%", margin:10}]}>
              <Button title="Submit" onPress={()=> this.update(this.state.name,this.state.Gmail,this.state.Preference, this.state.key)}/>
              <Text></Text>
              </View>
              <View style={[{ width: "40%", margin:10}]}>
              <Button title="Delete" onPress={()=> this.delete(this.state.key)}/>
              </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:-1,
        justifyContent:"center",
        margin: 10,
        paddingHorizontal: 10,
        alignItems:'stretch'
    },
    input: {
        height: 50,
        margin: 10,
        paddingHorizontal: 10,
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontSize: 25,
        color: "#161F3D",
    },    
})