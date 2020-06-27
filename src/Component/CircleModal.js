import React, {useState} from 'react';
import {Alert, Modal, TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from './Text';
import Input from './Input';

export default function CircleModal(props) {
  const [radius, setRadius] = useState(10);
  const [diameter, setDiameter] = useState(0);

  const set_diameter = (text) => {
    setDiameter(text);
    setRadius(0);
  };
  const set_radius = (text) => {
    setRadius(text);
    setDiameter(0);
  };
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
            <Text font={24} text={'Draw Circle'} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '50%'}}>
                <Input
                  value={radius}
                  onChangeText={(text) => set_radius(text)}
                  keyboardType={'numeric'}
                  customStyle={{marginTop: 5}}
                  title={'Enter Radius'}
                  placeholder={'Enter Radius'}
                />
              </View>
              <View style={{width: '50%'}}>
                <Input
                  value={diameter}
                  onChangeText={(text) => set_diameter(text)}
                  keyboardType={'numeric'}
                  customStyle={{marginTop: 5}}
                  title={'Enter Diameter'}
                  placeholder={'Enter Diameter'}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.setCircleModal(radius ? radius : diameter)}
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
