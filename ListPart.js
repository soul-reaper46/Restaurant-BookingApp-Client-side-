import React, { Component } from 'react';
import {View,Text, FlatList, TouchableOpacity,StyleSheet} from 'react-native';
import firebase from './fb'

class ListPart extends Component {

  constructor(props){
    super(props);
    this.state={
      participants:[],
    }

}
  
componentDidMount(){
    firebase.database().ref().on('value', (snapshot)=> {
    var part = []
    snapshot.forEach((child) => {
      part.push({
        key: child.key,
        name: child.val().name,
        Gmail: child.val().Gmail,
        Preference: child.val().Preference
       
      })
    })
  //console.log(part)
  this.setState({participants:part})
  });
}

  render(){
    console.log(this.state.participants)
    return(
      <View style={{alignSelf:'center', flex:1, justifyContent:'center'}}>
        <Text style={styles.bodytext}>Reservation List:</Text>
        <FlatList style={{width:'100%'}}
         data= { this.state.participants}
         keyExtractor={(item)=>item.key}
         renderItem={({item})=>{
          return(
            <View>  
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.props.navigation.navigate('MODIFY_RESERVATIONS',{...item})}}>
             <View style={styles.cardparent}>
                 <View>

                 </View>
                <Text style={{fontSize:20}}> NAME: "{item.name}"</Text>
                <Text style={{fontSize:20}}> GMAIL: "{item.Gmail}" </Text>
                <Text style={{fontSize:20}}> PREFERENCE: "{item.Preference}" </Text>
             </View>
            </TouchableOpacity>
            </View>
          )
        }}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    cardparent:{
        justifyContent:'center',
        alignItems:'stretch',
        borderWidth:2,
        paddingLeft:10,
        borderBottomRightRadius:12,
        borderBottomLeftRadius:12,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        margin:10,
        width:430,
        height:150,
        fontSize:30
        //marginTop:10

    },

    bodytext: {
      fontSize:25,
      color: 'black',
      padding:15,
      alignItems: "center",
      fontWeight:'bold',
      justifyContent:'center',
      textTransform:'uppercase',
      
    }
    
})


export default ListPart;