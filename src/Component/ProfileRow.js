import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {themeColor} from '../Constant';
import {TextInput, View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from './Text';
export default ProfileRow = ({leftText, rightText, icon}) => (
  <View style={styles.rowDive}>
    <Text color={'#1F1C19'} bold={true} font={16}>
      {leftText}
    </Text>
    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
      {rightText && (
        <Text color={'#1F1C19'} bold={true} font={16}>
          {rightText}
        </Text>
      )}
      {icon && (
        <Icon
          type={'material-icons'}
          name={'chevron-right'}
          color={'#707070'}
          size={25}
          iconStyle={{marginTop: 2}}
        />
      )}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  rowDive: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 12,
  },
});
