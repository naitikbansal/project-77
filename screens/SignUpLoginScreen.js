import React, {Component} from 'react';
import { render } from 'react-dom';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import  db from '../config.js';
import firebase from 'firebase';

export default class SignUpLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId: '',
            password: ''
        }
    }
    userSignUp =(username,password)=>{
        firebase.auth().createUserWithEmailandPassword(username,password)
        .then((response)=>{
            return Alert.alert("User added Successfully")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }

    userLogin =(username,password)=>{
        firebase.auth().signInWithEmailandPassword(username,password)
        .then((response)=>{
            return Alert.alert("User added Successfully")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>BARTER SYSTEM APP</Text>

                <TextInput style={styles.loginBox} 
                    placeholder= "abc@example.com"
                    keyboardType= 'email-address'
                    onChangeText= {(text)=>{
                        this.setState({emailId: text})
                    }}/>

                <TextInput style={styles.loginBox} 
                    placeholder= "password"
                    secureTextEntry= {true}
                    onChangeText= {(text)=>{
                        this.setState({password: text})
                    }}/>
                <TouchableOpacity style={[styles.button, {marginBottom: 20, marginTop: 20}]}
                    onPress={()=>{
                        this.userLogin(this.state.emailId, this.state.password)
                    }}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity>
            </View>
           
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
    flex:1, 
    backgroundColor:'red',
    alignItems: 'center'
 }, 

 title :{
    fontSize:65,
    paddingBottom:50,
    color : 'white',
    alignSelf: 'center',
    fontWeight: 'bold'
 }, 
 loginBox:{
  width: 300, 
  height: 40, 
  borderBottomWidth: 1.5, 
  borderColor : '#ff8a65', 
  fontSize: 20, 
  margin:10, 
  paddingLeft:10 
}, 
button:{ 
    width:300, 
    height:50, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:25, 
    backgroundColor:"yellow", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 15, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16,
},
 buttonText:{ 
     color:'red', 
     fontWeight:'200', 
     fontSize:20 
    }, 
buttonContainer:{ 
    flex:1, 
    alignItems:'center' 
} 
})
