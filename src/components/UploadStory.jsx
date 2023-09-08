import React, { useState } from 'react';
import { View, Button, Image, Alert, Platform } from 'react-native';
import axios from 'axios';
import { launchImageLibrary, launchCamera, PermissionsAndroid } from 'react-native-image-picker';
import { openImagePicker, handleCameraLaunch, uploadImage, requestCameraPermission } from '../utils/imageUtils';
import { useFocusEffect } from '@react-navigation/native';

const UploadStory = () => {
  const [imageUri, setImageUri] = useState(null);


  return (
    <View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      
      <Button title="Open Image Picker" onPress={() => openImagePicker(setImageUri)} />
      {/* <Button title="Open Camera" onPress={handleCameraLaunch(setImageUri)} /> */}
      <Button title="Upload Image" onPress={() => uploadImage(imageUri)} />
    </View>
  );
};

export default UploadStory;
