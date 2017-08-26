import React, { Component } from 'react';
import {Text, ScrollView} from 'react-native';
import style from '../styles/stylecomp.js';
import { StackNavigator } from 'react-navigation';


export default class CheckIn extends React.Component {

  constructor (){
   super();
   this.state = {
     id: 1,
     first_name: '',
     last_name: '',
     fb_id: ''
   }
 }


  async componentDidMount(){
    let response = await
    fetch('https://galv-whereto-db.herokuapp.com/users', {
      method: 'GET',
      headers: {
         'Accept': 'application/json',
         'Content-type': 'application/json'
      }
    })

    let jsonResponse = await response.json()
    this.setState({
      id: jsonResponse[0].id,
      first_name: jsonResponse[0].first_name,
      last_name: jsonResponse[0].last_name,
      fb_id: jsonResponse[0].fb_id,
    })
  }



  render(){
      return (
        <ScrollView style={{flex:1}} ref="scrollview">
          <Text>Check In! To my app!</Text>
          <Text>{this.state.first_name}</Text>
        </ScrollView>
      )
  }

}
