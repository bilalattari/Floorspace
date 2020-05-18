import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import CustomText from './Text';
export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.imageContgainer}>
          <Image
            source={require('../assets/avatar.png')}
            style={{height: 70, width: 70}}
          />
          <View style={{paddingLeft: 18}}>
            <CustomText text={'Andrew Owen'} />
            <TouchableOpacity>
              <CustomText
                text={'Edit Profile'}
                font={14}
                style={{textDecorationLine: 'underline'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageContgainer: {
    height: 200,
    backgroundColor: '#1E1B18',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
