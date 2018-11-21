import React, { Component } from 'react';
import { StyleSheet, View, Text , Dimensions} from 'react-native';

const { height, width } = Dimensions.get("window");

export default class Albumdetail extends Component {
  state = {
    AlbumListData: [
      { AlbumName: 'LOVE YOURSELF 結 ‘Answer’' },
      { AlbumName: 'LOVE YOURSELF 傳 ‘Tear’' },
      { AlbumName: 'LOVE YOURSELF 承  ‘Her’' },
      { AlbumName: 'LOVE YOURSELF 起 ‘Wonder’' },
      { AlbumName: 'WINGS' },
      { AlbumName: 'YOU NEVER WALK ALONE' }
  ]
  }
  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

    text: {
      fontWeight: "600",
      fontSize: 20,
      marginVertical: 20,
      marginLeft: 20
  },
  column: {
      flexDirection: "row",
      alignItems: "center",
      width: width / 2,
      justifyContent: "space-between"
  },

})