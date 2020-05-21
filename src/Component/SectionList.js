import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {themeColor} from '../Constant/index';
import Text from '../Component/Text';
import AlphabetSectionList from 'react-native-alphabet-sectionlist';

class SectionList extends Component {
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          padding: 12,
          paddingLeft: 15,
          marginBottom: 5,
        }}>
        <Text bold={true}>{item.name}</Text>
        <Text bold={true} font={16}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };
  renderSectionHeader = ({section: {title}}) => {
    return (
      <View
        style={{
          padding: 10,
          paddingLeft: 15,
        }}>
        <Text color={themeColor} bold={true}>
          {title}
        </Text>
      </View>
    );
  };

  render() {
    let {navigation, data} = this.props;
    return (
      <AlphabetSectionList
        data={data}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default SectionList;
