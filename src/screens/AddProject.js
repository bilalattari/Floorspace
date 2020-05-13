import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import { themeColor } from '../Constant/index';
import Input from '../Component/Input';
import DrawImage from '../screens/DrawImage';
import Button from '../Component/Button';
import Text from '../Component/Text';
import { Icon, SearchBar } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';

const Block = ({ children, row, label }) => (
  <View style={{ flex: 1, flexDirection: row ? 'row' : 'column' }}>
    {children ? children : <Input label={label} />}
  </View>
);

const CheckBox = ({ label, checked, backgroundColor }) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      marginRight: 20,
      alignItems: 'center',
      marginVertical: 4,
    }}>
    <Icon
      type={'material-community'}
      name={checked ? 'checkbox-blank-outline' : 'check-box-outline'}
      color={themeColor}
      size={27}
      containerStyle={{ marginTop: 2 }}
    />
    <Text
      color={themeColor}
      font={20}
      style={{
        paddingHorizontal: 12,
        paddingVertical: 3,
        backgroundColor: backgroundColor ? backgroundColor : null,
      }}
      bold={true}
      text={label}
    />
  </TouchableOpacity>
);

function ProjectReport({ navigation }) {
  // const [checked, onChangeChecked] = React.useState(false);
  // const [password, onChangePassword] = React.useState('');
  const [loader, setLoader] = useState(false);
  const [images, setImages] = useState([]);
  const [updatedImages, setNewImage] = useState([]);
  const [showDrawComponent, handleDraw] = useState(false);
  const loading = (boolean) => {
    setLoader(boolean);
  };

  function getImage() {
    ImagePicker.openPicker({ mediaType: 'photo' }).then((images) => {
      setImages([images]);
      handleDraw(true);
    });
  }
  return (
    <View>
    <Text text={"Add project"} color={themeColor} />
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
  getImageButton: {
    height: 172,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bbb',
  },
  undeRedoButton: {
    height: 40,
    width: 40,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBottomView: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
  },
  checkBoxDiv: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 6 },
  flex: { flex: 1 },
  rightContainer: { flex: 1 },
});

export default ProjectReport;
