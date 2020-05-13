/* eslint-disable */

import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements';
import { TouchableOpacity, ActivityIndicator, View, StyleSheet } from 'react-native';
import { themeColor, pinkColor } from '../Constant/index';
import Text from './Text';
export default Footer = ({ }) =>
    <View style={styles.footerView}>
        <Icon type={'material-community'} name={'home-outline'} color={'#fff'} />
        <Icon type={'material-community'} name={'filter-outline'} color={'#fff'} />
        <TouchableOpacity style={styles.middleButton}>
            <Icon type={'font-awesome'} name={'plus'} color={'#000'} containerStyle = {{paddingTop : 3}} />
        </TouchableOpacity>
        <Icon type={'entypo'} name={'box'} color={'#fff'} />
        <Icon type={'material-community'} name={'delete-outline'} color={'#fff'} />
    </View>




const styles = StyleSheet.create({
    footerView: {
        width: '90%', height: 50, borderRadius: 25, alignSelf: "center", paddingHorizontal: 12,
        backgroundColor: "#000", position: "absolute", bottom: 12, flexDirection: "row",
        justifyContent: "space-around", alignItems: "center"
    },
    middleButton: {
        marginTop: -41, height: 50, width: 50, justifyContent: "center", alignItems: "center",
        backgroundColor: "#fff", borderRadius: 125
    }
})