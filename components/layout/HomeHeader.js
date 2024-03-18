import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

const HomeHeader = ({navigation}) => {
    return (
        <View style ={styles.headerStyle}>

            <View >
              <Pressable onPress={()=>{navigation.openDrawer()}}>
                      <Entypo name="menu" size ={22}  color="#333" />
              </Pressable>
            </View>

            <View>
                    <Image style ={styles.headerAvatar} source={require('../../assets/images/avatar.png')} />
            </View>
                <View style= {styles.headerBadge} />
        </View>

    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    headerStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        color:'white',
        height:50,
        padding:5,
        backgroundColor:"white"
    },
    headerAvatar :{
        width:30,
        height:30,
        borderRadius:50,
        borderWidth:10
    },

    headerBadge :{
        position:"absolute",
        width:15,
        height:15,
        borderRadius:8,
        backgroundColor:'orange',
        right:30,
        top:10,
    }

    
})