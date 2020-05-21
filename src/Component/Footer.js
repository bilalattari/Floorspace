/* eslint-disable */

import React, {Component} from 'react';
import {Button, Icon} from 'react-native-elements';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {themeColor, pinkColor} from '../Constant/index';
import Text from './Text';
export default Footer = ({}) => (
  <View style={styles.footerView}>
    <Image
      source={require('../assets/home.png')}
      style={styles.imageIcon}
    />
    <Image
      source={require('../assets/filter.png')}
      style={styles.imageIcon}
    />
    <TouchableOpacity style={styles.middleButton}>
      <Icon
        type = {'font-awesome'}
        name={'plus'}
        color={'#000'}
        containerStyle={{paddingTop: 3}}
      />
    </TouchableOpacity>
    <Image
      source={require('../assets/slideshow.png')}
      style={styles.imageIcon}
    />
    <Image
      source={require('../assets/trash.png')}
      style={styles.imageIcon}
    />
  </View>
);

const styles = StyleSheet.create({
  footerView: {
    width: '86%',
    height: 50,
    borderRadius: 25,
    alignSelf: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageIcon : {height: 25, width: 25, resizeMode: 'contain'},
  middleButton: {
    marginTop: -41,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 125,
  },
});
