import React, {useState} from 'react';
import {Alert, Modal, TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from './Text';
import Input from './Input';

export default function DrawRectModal(props) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [label, setLabel] = useState('');

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
            <Text font={24} text={'Draw Rect'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <Input
                  value={width}
                  onChangeText={(text) => setWidth(text)}
                  keyboardType={'numeric'}
                  customStyle={{marginTop: 5}}
                  title={'Enter Width'}
                  placeholder={'Enter Width'}
                />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <Input
                  value={length}
                  onChangeText={(text) => setLength(text)}
                  keyboardType={'numeric'}
                  customStyle={{marginTop: 5}}
                  title={'Enter Length'}
                  placeholder={'Enter Length'}
                />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <Input
                  value={label}
                  onChangeText={(text) => setLabel(text)}
                  customStyle={{marginTop: 5}}
                  title={'Enter Label'}
                  placeholder={'Enter Label'}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => props.setRectModal({width, length, label})}
              style={styles.btn}>
              <Text color="#fff" size={20} text={'OK'} />
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
