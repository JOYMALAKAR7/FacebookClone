import { launchImageLibrary, launchCamera, PermissionsAndroid } from 'react-native-image-picker';
import { Alert, Platform } from 'react-native';
import axios from 'axios';

export const openImagePicker = (setImageUri) => {
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

// export const handleCameraLaunch = (setImageUri) => {
//   const options = {
//     mediaType: 'photo',
//     includeBase64: false,
//     maxHeight: 2000,
//     maxWidth: 2000,
//   };

//   launchCamera(options, (response) => {
//     if (response.didCancel) {
//       console.log('User cancelled camera');
//     } else if (response.error) {
//       console.log('Camera Error: ', response.error);
//     } else {
//       let imageUri;
//       if (Platform.OS === 'ios') {
//         imageUri = response.uri;
//       } else if (Platform.OS === 'android') {
//         imageUri = response.assets?.[0]?.uri || response.uri;
//       }
//       setImageUri(imageUri);
//       console.log('Image URI:', imageUri);
//     }
//   });
// };

export const uploadImage = async (imageUri) => {
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

    // Handle the server response here (e.g., show a success message).
    console.log('Server Response:', response.data);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

export const requestCameraPermission = async (setImageUri) => {
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
