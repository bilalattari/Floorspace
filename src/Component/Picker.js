import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../Component/Text';
import {Picker} from 'native-base';
import {Icon} from 'react-native-elements';
export default FPicker = ({
  pickerItems,
  selectedValue,
  onChange,
  header,
}) => (
  <View style={styles.PickerView}>
    {header && (
      <Text text={header} bold={true} font={16} style={{padding: 1}} />
    )}
    <Icon
      type={'font-awesome'}
      name={'angle-down'}
      color={'#000'}
      containerStyle={{position: 'absolute', right: 8, bottom: 7, zIndex: 1200}}
    />
    <Picker
      note
      mode="dropdown"
      style={styles.picker}
      selectedValue={selectedValue}
      placeholderIconColor={'#000'}
      onValueChange={(item) => onChange(item)}>
      {pickerItems.map((item, index) => (
        <Picker.Item label={item} value={item} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  PickerView: {
    width: '92%',
    alignSelf: 'center',
  },
  picker: {
    height: 40,
    backgroundColor: '#fff',
    color: '#000',
  },
});
