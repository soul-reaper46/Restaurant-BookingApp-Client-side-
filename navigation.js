import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigation, createStackNavigator} from 'react-navigation-stack';
import App from './App';
import DetailView from './DetailView';
import ListPart from './ListPart';

const StackNav = createStackNavigator({
  VIEW_RESERVATIONS: ListPart,
  MODIFY_RESERVATIONS: DetailView
})



const TabNav = createBottomTabNavigator({
  HOME: App,
  VIEW_DATA: StackNav
  
})



const MyNavigator = createAppContainer(TabNav);



export default class Navigation extends Component {
  render(){
    return(<MyNavigator/>)
  }
}
