import React from 'react';
import { StyleSheet, Text, View , StatusBar, TextInput , Dimensions } from 'react-native';
import Album from './public/js/Album';

import { ScrollView } from 'react-native-gesture-handler';
import { AppLoading } from 'expo'

const { height , width } = Dimensions.get("window");


export default class App extends React.Component {

  state =   {
    newAlbum : "", 
    loadingAlbum : false
  };
  componentDidMount = () => {
    this._loadAlbum 
  }
  render() {
    const {newAlbum , loadingAlbum} = this.state;       
    // if(!loadingAlbum) {
    //   return <AppLoading />;
    // }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}> BangTan App </Text>
        <View style={styles.card}> 
          <TextInput 
              style={styles.input} 
              placeholder={"New Album List"} 
              value ={newAlbum} 
              onChangeText = {this._crontolNewAlbumList }
              placeholderTextColor = {'#5C1DB5'}
              returnKeyType = {"done"}
              autoCorrect = {false}
           />
          <ScrollView contentOffset={styles.Album} >
            <Album />   
          </ScrollView>
        </View>
      </View>
    );
  }
  _crontolNewAlbumList = text =>{
      this.setState({
        newAlbum : text  
      });
  }
  _loadAlbum = () => {
    this.setState( {
      loadingAlbum : true
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  title : {
    color : "white",
    fontSize : 30,
    marginTop : 50, 
    fontWeight : "200", 
    marginBottom : 20
  }, 
  card : {
    backgroundColor : "#D5D5D5",
    flex : 1,
    width : width - 25, 
    height : height, 
    borderTopLeftRadius : 20, 
    borderTopRightRadius : 20
  },
  input : {
    padding : 20, 
    fontSize : 30,
    borderBottomColor : '#5D5D5D', 
    borderBottomWidth : 1
  }, Album : {
    alignItems : "center"
  }
});
