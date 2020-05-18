/* eslint-disable */

import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import {themeColor, pinkColor} from '../Constant/index';
import {Icon, SearchBar} from 'react-native-elements';
import CustomText from './Text';
export default Header = ({heading, subHeading, placeholder}) => (
  <View style={{backgroundColor: '#fff'}}>
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../assets/menu.png')} style={styles.menu} />
      </TouchableOpacity>
      <CustomText text={heading} color={themeColor} />
      <TouchableOpacity>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      </TouchableOpacity>
    </View>
    <SearchBar
      placeholder={placeholder ? placeholder : 'Search Existing Project'}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  containerStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
    borderTopColor: '#fff',
    marginVertical: 6,
  },
  inputContainerStyle: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius: 25,
  },

  menu: {height: 40, width: 40, resizeMode: 'contain'},
  avatar: {height: 50, width: 50, resizeMode: 'contain'},
});
