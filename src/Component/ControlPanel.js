import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomText from './Text';

let menuItems = [
  {name: 'Leads & Projects', navigate: ''},
  {name: 'Account Settings', navigate: 'Profile'},
  {name: 'Customize Project Files', navigate: 'ProjectFiles'},
  {name: 'Products', navigate: 'Products'},
  {name: 'Suppliers', navigate: 'Supplier'},
  {name: 'Labour', navigate: 'Labours'},
  {name: 'Sub-contractors', navigate: ''},
  {name: 'Analytics', navigate: ''},
];
export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }
  menuIcons = (text, navigateTo) => (
    <TouchableOpacity
      key={text}
      onPress={() => this.props.navigation.navigate(navigateTo)}
      style={styles.menuButton}>
      <CustomText text={text} font={16} bold={true} />
    </TouchableOpacity>
  );
  render() {
    let {navigation} = this.props;
    return (
      <ScrollView style={styles.menu}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/avatar.jpg')}
            style={{height: 70, width: 70 , borderRadius : 125}}
          />
          <View style={{paddingLeft: 18}}>
            <CustomText text={'Andrew Owen'} color={'#fff'} />
            <TouchableOpacity>
              <CustomText
                text={'Edit Profile'}
                font={14}
                color={'#fff'}
                style={styles.decoration}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 41}}>
          {menuItems.map((item, index) =>
            this.menuIcons(item.name, item.navigate),
          )}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    backgroundColor: '#1E1B18',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {paddingLeft: 21, paddingVertical: 12},
  decoration: {textDecorationLine: 'underline'},
  menu: {flex: 1, backgroundColor: '#fff'},
});
