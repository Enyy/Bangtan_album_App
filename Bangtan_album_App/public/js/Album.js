import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions , FlatList, ViewPagerAndroid} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

export default class Album extends Component {
    state = {
        isEditting: false,
        isCompleted: false,

    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList data={[
                    {key: 'LOVE YOURSELF 結 ‘Answer’'  },
                    {key: 'LOVE YOURSELF 傳 ‘Tear’' },
                    {key: 'LOVE YOURSELF 承  ‘Her’'  },
                    {key: 'LOVE YOURSELF 起 ‘Wonder’' },
                    {key: 'WINGS'  },
                    {key: 'YOU NEVER WALK ALONE' },
                    {key: '화양연화 part2'},
                    {key: '화양연화 part1'},
                ]}  
                    renderItem ={
                        ({item}) => <Text style={styles.text}>  {item.key}</Text> 
                    }                    
                /> 
            </View>
        );
    }
    _toggleComplate = () => {
        this.setState(preSatus => {
            return {   // 버튼 클릭하면서 true, false 로 변환~ 
                isCompleted: !preSatus.isCompleted
            }
        });
    }
    _startEidtting = () => {
        this.setState({
            isEditting: true
        })
    }
    _finshEiditin = () => {
        this.setState({
            isEditting: false
        })
    }
}

export class updownIcon extends Component {

    render() {
        const { isEditting } = this.state;
        return (
            isEditting ? (
                <View style={styles.actions}>
                    <TouchableOpacity onPressOut={this._finshEiditin}>
                        <View style={styles.actionContanior}>
                            <Ionicons
                                style={styles.actionText} color={"black"} size={40} name="ios-arrow-up" />
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._startEidtting}>
                            <View style={styles.actionContanior}>
                                <Ionicons style={styles.actionText} color={"black"} size={40} name="ios-arrow-down" />
                            </View>
                        </TouchableOpacity>
                    </View>
                ) 
        )
    }

}


const styles = StyleSheet.create({

    container: {
        width: width - 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#E8D9FF',
        borderColor: '#FFB2D9',
        borderWidth: 5,
        marginLeft: 10,
        marginRight: 20
    },
    Completedcircle: {
        backgroundColor: 'transparent',
        color: '#FFB2D9'
    },
    unCompltedcircle: {
        backgroundColor: 'transparent'
    },
    CompletedText: {
        color: '#EAEAEA',
        textDecorationLine: "line-through"
    },
    unCompltedcText: {
        color: '#000'
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
    actions: {
        flexDirection: "row"
    },
    actionContanior: {
        marginVertical: 10,
        marginHorizontal: 10
    }, 
    Albumdetail : {
        alignItems : "center"
      }
})