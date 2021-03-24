import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import TransactionScreen from './screens/BookTransactionScreen'
import SearchScreen from './screens/SearchScreen'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  
  render(){
    
    return (
    <AppContainer/>
    )
  
  }
  
}

const TabNavigator=createBottomTabNavigator({
  WriteStory:{screen: TransactionScreen},
  ReadStory: {screen: SearchScreen}
}, 
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName=navigation.state.routeName
      if(routeName==="WriteStory"){
        return(
          <Image source={require("./assets/write.png")}
          style={{width:40, height:40}}
          
          />
        )
      }

      else if(routeName==="ReadStory"){
        return(
          <Image source={require("./assets/read.png")}
          style={{width:40, height:40}}
          
          />
        )
      }
    }
  })
}
)

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
