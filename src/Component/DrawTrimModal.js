import React, {useState} from 'react';
import {Alert, Modal, TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from './Text';
import Input from './Input';
import FPicker from './Picker';

export default function DrawTrimModal(props) {
  const [trim, setTrim] = useState('trim');
  const [color, setColor] = useState('orange');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text font={24} text={'Draw Trim'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <FPicker
                  selectedValue={trim}
                  onChange={(item) => setTrim(item)}
                  bold={false}
                  pickerItems={['trim']}
                  header={'Select Trim'}
                />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <FPicker
                  selectedValue={color}
                  onChange={(item) => setColor(item)}
                  bold={false}
                  pickerItems={['orange', 'yellow', 'red', 'black']}
                  header={'Change Colour'}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.setDrawTrim(trim, color)}
              style={styles.btn}>
              <Text color="#fff" size={20} text={'SAVE'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    height: 'auto',
  },
  btn: {
    backgroundColor: '#2D2D2D',
    width: '90%',
    height: 55,
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
