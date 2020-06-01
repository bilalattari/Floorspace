import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import Text from '../Component/Text';
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';
class ProjectFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
    };
  }
  icon = (type, name, color, onClick) => (
    <TouchableOpacity onPress={onClick} style={{padding: 5}}>
      <Icon
        type={type ? type : 'font-awesome'}
        name={name}
        color={color ? color : '#000'}
      />
    </TouchableOpacity>
  );
  select = (index) => {
    let {selectedItem} = this.state;
    let updateItem = selectedItem;
    if (updateItem[index]) {
      updateItem[index] = false;
      this.setState({selectedItem: updateItem});
    } else {
      updateItem[index] = true;
      this.setState({selectedItem: updateItem});
    }
  };
  render() {
    let {navigation} = this.props;
    let {selectedItem} = this.state;
    let type = navigation.getParam('type');
    return (
      <SafeAreaView>
        <Header
          leftComponent={{
            icon: 'close',
            color: '#fff',
            onPress: () => navigation.navigate('Home'),
          }}
          centerComponent={{
            text: 'Project Files',
            style: styles.headerTitle,
          }}
          rightComponent={{
            icon: 'upload',
            type: 'antdesign',
            color: '#fff',
            onPress: () => navigation.navigate('Checklist'),
          }}
          containerStyle={styles.headerContainer}
        />
        <ScrollView>
          <View style={styles.selectAll}>
            {this.icon('material-community', 'checkbox-blank-outline')}
          </View>
          <FlatList
            data={['0', '1', '2', '3', '4', '5', '6', '7']}
            renderItem={({item, index}) => (
              <View style={styles.projectContainer}>
                <Text color={'black'} font={16} bold={true}>
                  Customer Quote
                </Text>
                <View style={styles.iconView}>
                  {this.icon(undefined, 'pencil', null, () =>
                    this.select(index),
                  )}
                  {this.icon('entypo', 'eye', null, () => this.select(index))}
                  {this.icon('feather', 'file', null, () => this.select(index))}
                  {this.icon(
                    'material-community',
                    selectedItem[index]
                      ? 'check-box-outline'
                      : 'checkbox-blank-outline',
                    null,
                    () => this.select(index),
                  )}
                </View>
              </View>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#12B3B4',
    justifyContent: 'space-around',
  },
  selectAll: {
    height: 50,
    alignItems: 'flex-end',
    padding: 6,
    paddingRight: 21,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    alignItems: 'center',
  },
  projectContainer: {
    minHeight: 95,
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 5,
  },
  headerTitle: {color: '#fff', fontWeight: 'bold', fontSize: 18},
});

export default ProjectFiles;
