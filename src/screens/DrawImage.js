import React, { useState, useEffect, useRef } from 'react';
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
import Button from '../Component/Button';
import Text from '../Component/Text';
import ImagePicker from 'react-native-image-crop-picker';

class DrawImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linePaths: [],
      loader: false,
      image: {},
      showButtons: true,
      showImage: false,
      text: '',
      showText: false,
      focused: true,
      redoArr: [],
      strokeColor: '#fff'
    }
  }
  // function DrawImage({ navigation, onSave, imagePath }) {
  //   const [loader, setLoader] = useState(false);
  //   const [linePaths, setlinePaths] = useState([]);
  //   const [images, setImages] = useState([]);
  //   const loading = (boolean) => {
  //     setLoader(boolean);
  //   };

  handleLinePath = (arr) => {
    this.setState({ linePaths: arr })
  }
  undo = () => {
    let { linePaths, redoArr } = this.state
    let redoUpdate = redoArr
    let linePathsUpdate = linePaths
    let pop = linePathsUpdate.pop()
    redoUpdate.push(pop)
    this.setState({ linePaths: linePathsUpdate, redoArr: redoUpdate })
  }

  redo = () => {
    let { linePaths, redoArr } = this.state
    if (redoArr.length > 0) {
      let redoUpdate = redoArr
      let linePathsUpdate = linePaths
      let pop = redoUpdate.pop()
      linePathsUpdate.push(pop)
      this.setState({ linePaths: linePathsUpdate, redoArr: redoUpdate })
    }
  }

  handleStrokeColor = (color) => {
    this.setState({ strokeColor: color })
  }
  onImageLoad = () => {
    this.setState({ showButtons: false }, () => {
      this._viewShot.capture().then(uri => {
        console.log("do something with ", uri);
        this.props.onSave(uri)
      })
    })
  };

  getImage = () => {
    if (!this.state.showImage) {
      ImagePicker.openPicker({ mediaType: 'photo' }).then((image) => {
        this.setState({ image, showImage: true })
      });
    }
    else {
      this.setState({ showImage: false })
    }
  }
  // const canv?as = useRef(null);
  render() {

    let { linePaths, image, strokeColor, showText, focused, text, showImage, showButtons } = this.state
    return (
      <View>
        <Text text={"Draw Image"} color={themeColor} />
      </View>

    );
  }
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
    height: 35,
    width: 35,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBottomView: {
    height: 80,
    zIndex: 1200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
  },
  checkBoxDiv: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 6 },
  flex: { flex: 1 },
  rightContainer: { flex: 1 },
});

export default DrawImage;
