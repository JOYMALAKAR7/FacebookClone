import React, { useState } from 'react';
import { View, Button, Image, Alert,Platform,PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {launchCamera} from 'react-native-image-picker';
import axios from 'axios';
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../utils/Colors';

const Post_upload = () => {
  const [imageUri, setImageUri] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setImageUri(imageUri);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri;
        if (Platform.OS === 'ios') {
          // On iOS, use response.uri
          imageUri = response.uri;
        } else if (Platform.OS === 'android') {
          // On Android, use response.assets[0].uri if available
          imageUri = response.assets?.[0]?.uri || response.uri;
        }
        setImageUri(imageUri);
        console.log('Image URI:', imageUri);
      }
    });
  };
  
  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert('Please select an image first');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg', // Adjust the file type as needed
        name: 'image.jpg',
      });

      const response = await axios.post('http://wbjssk.emri.in:7777/wbit/api/image_upload.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the server response here
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

 

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera access to take photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
        handleCameraLaunch();
        // Now you can open the camera
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  } else {
    // On iOS, permissions are requested in a different way
    // You may need to adjust the logic for iOS
  }
};

  return (
    <View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}

      <VectorIcon
        name="camera"
        size={60}
        color={Colors.black}
        type="AntDesign"
        onPress={requestCameraPermission}
      />
 <VectorIcon
        name="images"
        size={60}
        color={Colors.black}
        type="FontAwesome5"
        onPress={openImagePicker}
      />
       <VectorIcon
        name="folder-upload-outline"
        size={60}
        color={Colors.black}
        type="MaterialCommunityIcons"
        onPress={uploadImage}
      />
     
    </View>
  );
};

export default Post_upload;
