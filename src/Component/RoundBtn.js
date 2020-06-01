/* eslint-disable */

import React, {Component, useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {themeColor} from '../Constant';
import Text from './Text';
import Block from './Block';
export default RoundBtn = (props) => (
  <View>
    <Text marginLeft={8} bold={false} font={16}>
      {props.heading}
    </Text>
    <Block direction={'row'} style={{marginTop: 10, marginLeft: 8}}>
      <TouchableOpacity activeOpacity={0.6} style={styles.roundBtn}>
        <Text color={'#fff'} bold={true} font={16}>
          YES
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.roundBtn, {backgroundColor: '#fff'}]}>
        <Text color={'#000'} bold={false} font={16}>
          NO
        </Text>
      </TouchableOpacity>
    </Block>
  </View>
);

const styles = StyleSheet.create({
  roundBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
});
