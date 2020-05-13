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
import Footer from '../Component/Footer'
function Home({ navigation }) {
  const [search, onChangeSearch] = React.useState('');
  // const [checked, onChangeChecked] = React.useState(false);
  // const [password, onChangePassword] = React.useState('');
  const [loader, setLoader] = useState(false);
  const loading = (boolean) => {
    setLoader(boolean);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <Text text={"HOme"} color={themeColor} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({

})

export default Home