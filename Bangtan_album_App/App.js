import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';
import Album from './public/js/Album';

import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get("window");
const ws = new WebSocket('ws://host.com/path'); // webSocket 이랑 어떻게 연결해야할지 모르겠어..

export default class App extends React.Component {

  state = {
    newAlbum: "",
    loadingAlbum: false
  };
  componentDidMount = () => {
    this._loadAlbum
  }
  render() {
    const { newAlbum, loadingAlbum } = this.state;
    // if(!loadingAlbum) {
    //   return <AppLoading />;
    // }
    return (
      <LinearGradient colors={["#FFD9EC", "#D1B2FF"]} style={styles.container}>

        <View style={styles.container}>
          <StatusBar barStyle="light-content" hidden={true} />
          <Text style={styles.title}> BangTan App </Text>
          <View style={styles.card}>
            <ScrollView contentOffset={styles.Album} >
              <Album />
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    );
  }
  _crontolNewAlbumList = text => {
    this.setState({
      newAlbum: text
    });
  }
  _loadAlbum = () => {
    this.setState({
      loadingAlbum: true
    })
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }, 
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 20
  },
  card: {
    flex: 1,
    width: width - 25,
    height: height,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    padding: 20,
    fontSize: 30,
    borderBottomColor: '#5D5D5D',
    borderBottomWidth: 1
  },
  Album: {
    height: height - 100,
    alignItems: "center",
  }
});
