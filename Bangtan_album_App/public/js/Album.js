import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity , View, Dimensions} from 'react-native';

const { height , width } = Dimensions.get("window");

export default class Album extends Component {
    state = {
        isEditting : false, 
        isCompleted : false
    }
    render() {
        const { isCompleted , isEditting } = this.state;
        return (
        <View style = {styles.container}>
            <View style ={styles.column} >
            <TouchableOpacity onPress={this._toggleComplate}>
                <View style={ [styles.circle ,  
                                isCompleted ? styles.Completedcircle : styles.unCompltedcircle]}>
                </View>
            </TouchableOpacity>
                <Text style={[styles.text ,  isCompleted ? styles.CompletedText : styles.unCompltedcText ]}> LOVE YOURSELF 結 ‘Answer’ </Text>
            </View>
               { isEditting ? (
                   <View style={styles.actions}>
                    <TouchableOpacity onPressOut={this._finshEiditin}> 
                        <View style = {styles.actionContanior}>
                            <Text style = {styles.actionText}> 확인 </Text>    
                        </View>    
                    </TouchableOpacity>  
                   </View>
               ) : (
                <View style={styles.actions}>
                    <TouchableOpacity onPressOut={this._startEidtting}> 
                        <View style = {styles.actionContanior}>
                            <Text style = {styles.actionText}> 수정 </Text>    
                        </View>    
                    </TouchableOpacity>  
                    <TouchableOpacity > 
                        <View style = {styles.actionContanior}>
                            <Text style = {styles.actionText}> 삭제 </Text>    
                        </View>    
                    </TouchableOpacity>  
                </View>
               ) }
        </View>
        );
    } 
    _toggleComplate = () => {
        this.setState(preSatus => {
            return{   // 버튼 클릭하면서 true, false 로 변환~ 
                isCompleted : !preSatus.isCompleted
            }
        });
    }
    _startEidtting = () => {
        this.setState({
            isEditting : true
        })
    }
    _finshEiditin = () => {
        this.setState( {
            isEditting : false
        })
    }
}

const styles = StyleSheet.create({
    container : {
        width : width - 50, 
        borderBottomColor : '#fff',
        borderBottomWidth : StyleSheet.hairlineWidth,
        flexDirection : "row", 
        alignItems: "center", 
        justifyContent : "space-between" 
    }, 
    circle : {
        width : 30, 
        height : 30, 
        borderRadius : 15,
        backgroundColor : '#E8D9FF', 
        borderColor : '#FFB2D9',
        borderWidth : 5,
        marginLeft : 10, 
        marginRight : 20 
    },
    Completedcircle  :{
        backgroundColor : '#E8D9FF'
    },
    unCompltedcircle : {
        backgroundColor : '#D5D5D5'
    },
    CompletedText : {
        color : '#EAEAEA', 
        textDecorationLine : "line-through"
    },
    unCompltedcText : {
        color : '#000'
    },

    text : {
        fontWeight : "600", 
        fontSize :20, 
        marginVertical : 20
    }, 
    column : {
        flexDirection : "row", 
        alignItems : "center", 
        width : width / 2, 
        justifyContent : "space-between" 
    }, 
    actions : {
        flexDirection : "row"
    }, 
    actionContanior :  {
        marginVertical : 10, 
        marginHorizontal : 10
    }
})