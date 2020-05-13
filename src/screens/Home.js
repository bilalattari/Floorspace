import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList
} from 'react-native';
import { themeColor } from '../Constant/index'
import Input from '../Component/Input'
import Button from '../Component/Button'
import Text from '../Component/Text'
import { CheckBox } from 'react-native-elements'
import { Icon, SearchBar } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

function Home({ navigation }) {
  const [search, onChangeSearch] = React.useState('');
  const [selected, onSelect] = React.useState(0);
  // const [checked, onChangeChecked] = React.useState(false);
  // const [password, onChangePassword] = React.useState('');
  const [loader, setLoader] = useState(false);
  const loading = (boolean) => {
    setLoader(boolean);
  };

  return (
    <View>
    <Text text={"HOme"} color={themeColor} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rightContainer: { padding: '5%', flex: 1 },
  topHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  plusButton: {
    backgroundColor: "#466AA5", height: 25, width: 25, borderRadius: 25,
    justifyContent: 'center', alignItems: "center", marginLeft: 12
  },
  searchContainer: {
    padding: 0, backgroundColor: '#fff', width: '45%',
    borderTopWidth: 0, borderBottomWidth: 0,
  },
})

export default Home