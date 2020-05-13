import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '../Component/Input';
import { themeColor } from '../Constant/index';
import Button from '../Component/Button';
import Text from '../Component/Text';
import { CheckBox } from 'react-native-elements';
function Login({ navigation }) {
  const [email, onChangeEmail] = React.useState('');
  const [checked, onChangeChecked] = React.useState(false);
  const [password, onChangePassword] = React.useState('');
  const [loader, setLoader] = useState(false);

  const loading = (boolean) => {
    setLoader(boolean);
  };
  function checkUncheck() {
    onChangeChecked(!checked);
  }

  return (
    <View>
      <Text text={"Login"} color={themeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
