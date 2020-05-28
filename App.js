import React, { Component } from 'react';
import { Text, View ,StyleSheet, StatusBar, Image, TextInput, Button } from 'react-native';

import {enableScreens} from 'react-native-screens';
enableScreens()

export default class App extends React.Component {

   render() {

     return (
      <View style={styles.parent}>
        <StatusBar barStyle='light-content' backgroundColor = 'black'/>
        <View style={styles.child1}>
            <Text style={styles.headingtext}> Raju's  Restaurant </Text>           
        </View>
      <View style={styles.child2}>
      <Image style={{height:325,width:445}}
            source= {require('./App/Source/five.jpg')}/>  
      <View style={[styles.child2,{alignItems:'center',flex:0}]}>
      <Text style={styles.bodytext}> Fine Dining! </Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.bodytext,{alignItems:'stretch',fontSize:25,color:'black',padding:15,paddingTop:40,fontWeight:'bold',justifyContent:'center',textTransform:'uppercase'}}> Admin Functions:</Text>
      
      <Text style={[styles.bodytext,{fontWeight:'500' ,fontStyle:'italic',fontSize:22,padding:0,alignItems:'stretch'}]}> 1) View Reservations.    </Text>
      <Text style={[styles.bodytext,{fontWeight:'500' ,fontStyle:'italic',fontSize:22,padding:0,paddingLeft:28,alignItems:'stretch'}]}> 2) Modify Reservations.    </Text>
      <View style={styles.child3}>
         <Text style={styles.footertext}> This app is for Authorized Personel only </Text>
       </View>
      </View>
      
      </View> 

    </View>
      );
    }
  }

  const styles = StyleSheet.create({

    parent:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'white',
      padding:10,
      margin:5,
      alignItems:'center'
    },

    child1:{
      flex:-1,
      alignItems:'center',
      margin:2,
      borderRadius:7,
      padding:10,
      borderWidth:4,
      borderColor:'black'
    },

    child2:{
      flex:6,
      alignItems:'center',
      padding:13
    },

    child3:{
      flex:1,
      paddingBottom:70,
      alignItems:'center',
      justifyContent:'center'
    },

    headingtext:{
      fontSize: 40,
      color : 'black',
      fontWeight:"bold",
      textTransform:'uppercase'
    },
  
    bodytext: {
      fontSize:25,
      color: 'black',
      padding:15,
      alignItems: "center",
      fontWeight:'bold',
      justifyContent:'center',
      textTransform:'uppercase',
      
    },

    input:{
      borderColor:'grey',
      borderWidth:2,
      height:60,
      fontSize:15,
      color:'blue',
      borderRadius:8,
      paddingLeft:15,
      margin:10
    },

    footertext: {
      fontSize:20,
      color: 'black',
      fontWeight:'bold',
      padding:0,
      fontStyle: 'italic',
      alignItems:'center',
      justifyContent:'center'
    }
    
  })  