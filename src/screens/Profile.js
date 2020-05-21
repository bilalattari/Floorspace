import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header} from 'react-native-elements';
import Text from '../Component/Text';
import ProfileRow from '../Component/ProfileRow';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {navigation} = this.props;
    let type = navigation.getParam('type');
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <Header
          leftComponent={{
            icon: 'close',
            color: '#fff',
            onPress: () => navigation.navigate('Home'),
          }}
          centerComponent={{
            text: 'Settings',
            style: styles.headerTitle,
          }}
          containerStyle={styles.headerContainer}
        />
        <Text font={21} bold={true} style={{padding: 12}}>
          Account Settings
        </Text>
        <ProfileRow />
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#12B3B4',
    justifyContent: 'space-around',
  },
  headerTitle: {color: '#fff', fontWeight: 'bold', fontSize: 18},
});
