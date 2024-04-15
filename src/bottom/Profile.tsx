// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Alert
// } from 'react-native';
// import React, {useState} from 'react';
// import profileImgIcon from '../asset/profileImgIcon.png';
// import {auth, firestore} from '../config/firebase';
// import {firebase} from '@react-native-firebase/firestore';
// import {useAppSelector, useAppDispatch} from '../hooks/hooks';
// import {getUserData} from '../store/slices/userSlice';
// import ImagePicker from 'react-native-image-crop-picker';

// const Profile = () => {
//   const dispatch = useAppDispatch();
//   const userData = useAppSelector(state => state.user.userData);
//   const userName = userData?.userName;
//   // console.log('userName', userName);
//   const email = auth().currentUser?.email;
//   // console.log('email', email);
//   const currentUserUID: string | null = auth().currentUser?.uid;
//   // console.log('currentUserUID', currentUserUID);
//   dispatch(getUserData(currentUserUID));

//   // const handleImageProfile=()=>{
//   //   ImagePicker.openPicker({
//   //     width: 300,
//   //     height: 400,
//   //     cropping: true
//   //   }).then(image => {
//   //     console.log(image);
//   //   });
//   //   ImagePicker.openCamera({
//   //     width: 300,
//   //     height: 400,
//   //     cropping: true,
//   //   }).then(image => {
//   //     console.log(image);
//   //   });
//   // }
//   // import ImagePicker from 'react-native-image-crop-picker';

//   const handleImageProfile = () => {
//     Alert.alert(
//       'Select Image Source',
//       'Choose the source for your image',
//       [
//         { text: 'Gallery', onPress: () => openImagePicker('gallery') },
//         { text: 'Camera', onPress: () => openImagePicker('camera') },
//         { text: 'Cancel', style: 'cancel' },
//       ],
//       { cancelable: true }
//     );
//   };

//   const openImagePicker = (source) => {
//     let imagePickerFunction;
//     if (source === 'gallery') {
//       imagePickerFunction = ImagePicker.openPicker;
//     } else if (source === 'camera') {
//       imagePickerFunction = ImagePicker.openCamera;
//     } else {
//       // Handle invalid source
//       return;
//     }

//     imagePickerFunction({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       console.log("image is",image);
//     }).catch(error => {
//       console.log('Image picker error:', error);
//     });
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Profile Settings</Text>
//         <View style={styles.profileImgDiv}>
//           <TouchableOpacity onPress={handleImageProfile}>
//             <View style={styles.profileImgCircle}></View>
//             <Image source={profileImgIcon} style={styles.profileImgIcon} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.userNameDiv}>
//           <Text style={styles.texts}>Username</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             keyboardType="email-address"
//             defaultValue={userName}
//           />
//         </View>

//         <View style={styles.userEmailDiv}>
//           <Text style={styles.texts}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             keyboardType="email-address"
//             defaultValue={email}
//             editable={false}
//           />
//         </View>
//         <View style={{width: 303, borderWidth: 1, borderColor: 'transparent'}}>
//           <TouchableOpacity>
//             <Text style={{marginLeft: 'auto'}}>Update Password?</Text>
//           </TouchableOpacity>
//         </View>
//         {/* button*/}
//         <View style={styles.buttonUpdateDiv}>
//           <TouchableOpacity style={styles.buttonUpdate}>
//             <Text style={styles.updateProfileText}>Update Profile</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     height: '100%',
//     width: '100%',
//     // marginTop: 30,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     lineHeight: 29.26,
//     marginTop: 78,
//   },
//   profileImgDiv: {
//     borderWidth: 1,
//     borderColor: 'transparent',
//     height: 125,
//     width: 125,
//     marginTop: 47,
//   },
//   profileImgCircle: {
//     height: 125,
//     width: 125,
//     borderWidth: 1,
//     borderColor: '#000000',
//     // marginTop:47,
//     borderRadius: 71,
//     borderStyle: 'dashed',
//     // marginLeft: 100,
//   },
//   profileImgIcon: {
//     // marginTop: 90,
//     // marginRight:20,
//     position: 'absolute',
//     left: 98,
//     top: 100,
//   },
//   userNameDiv: {
//     height: 62,
//     width: 303,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     marginTop: 50,
//   },
//   userEmailDiv: {
//     height: 62,
//     width: 303,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     marginTop: 50,
//   },
//   texts: {
//     fontSize: 18,
//     lineHeight: 21.94,
//   },
//   input: {
//     // height: 30,
//     width: '100%',
//     // backgroundColor:'red',
//     borderWidth: 1,
//     // border
//     borderBottomWidth: 1, // Border only at the bottom
//     borderTopColor: 'transparent', // Transparent top border
//     borderRightColor: 'transparent', // Transparent right border
//     borderLeftColor: 'transparent', // Transparent left border
//     borderBottomColor: 'black',
//     // fontSize:50,
//     paddingHorizontal: 10,
//     paddingVertical: 2,
//   },
//   buttonUpdate: {
//     backgroundColor: '#101C1D',
//     padding: 10,
//     borderRadius: 50,
//     width: '90%',
//     height: 60,
//     // marginHorizontal:'auto',
//     display: 'flex',
//     justifyContent: 'center',
//     // alignItems
//     marginVertical: 20,
//   },
//   updateProfileText: {
//     color: 'white',
//     fontSize: 20,
//     fontFamily: 'Montserrat-Bold',
//     textAlign: 'center',
//     lineHeight: 24.38,
//   },
//   buttonUpdateDiv: {
//     display: 'flex',
//     alignItems: 'center',
//     borderWidth: 0,
//     borderColor: 'transparent',
//     width: '100%',
//     marginTop: 90,
//   },
// });

// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Alert
// } from 'react-native';
// import React, { useState } from 'react';
// import profileImgIcon from '../asset/profileImgIcon.png';
// import { auth, firestore } from '../config/firebase';
// import { firebase } from '@react-native-firebase/firestore';
// import { useAppSelector, useAppDispatch } from '../hooks/hooks';
// import { getUserData } from '../store/slices/userSlice';
// import ImagePicker from 'react-native-image-crop-picker';

// const Profile = () => {
//   const dispatch = useAppDispatch();
//   const userData = useAppSelector(state => state.user.userData);
//   const userName = userData?.userName;
//   const email = auth().currentUser?.email;
//   const currentUserUID: string | null = auth().currentUser?.uid;
//   dispatch(getUserData(currentUserUID));

//   const [selectedImage, setSelectedImage] = useState(null);
//   // console.log('selectedImage',selectedImage);

//   const handleImageProfile = () => {
//     Alert.alert(
//       'Select Image Source',
//       'Choose the source for your image',
//       [
//         { text: 'Gallery', onPress: () => openImagePicker('gallery') },
//         { text: 'Camera', onPress: () => openImagePicker('camera') },
//         { text: 'Cancel', style: 'cancel' },
//       ],
//       { cancelable: true }
//     );
//   };

//   const openImagePicker = (source) => {
//     let imagePickerFunction;
//     if (source === 'gallery') {
//       imagePickerFunction = ImagePicker.openPicker;
//     } else if (source === 'camera') {
//       imagePickerFunction = ImagePicker.openCamera;
//     } else {
//       // Handle invalid source
//       return;
//     }

//     imagePickerFunction({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       setSelectedImage(image.path); // Set the selected image URI
//     }).catch(error => {
//       console.log('Image picker error:', error);
//     });
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Profile Settings</Text>
//         <View style={styles.profileImgDiv}>
//           <TouchableOpacity onPress={handleImageProfile}>
//             <View style={styles.profileImgCircle}>
//               {selectedImage ? (
//                 <Image source={{ uri: selectedImage }} style={styles.profileImgIcon} />
//               ) : (
//                 <Image source={profileImgIcon} style={styles.profileImgIcon} />
//               )}
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.userNameDiv}>
//           <Text style={styles.texts}>Username</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             keyboardType="email-address"
//             defaultValue={userName}
//           />
//         </View>

//         <View style={styles.userEmailDiv}>
//           <Text style={styles.texts}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             keyboardType="email-address"
//             defaultValue={email}
//             editable={false}
//           />
//         </View>
//         <View style={{ width: 303, borderWidth: 1, borderColor: 'transparent' }}>
//           <TouchableOpacity>
//             <Text style={{ marginLeft: 'auto' }}>Update Password?</Text>
//           </TouchableOpacity>
//         </View>
//         {/* button*/}
//         <View style={styles.buttonUpdateDiv}>
//           <TouchableOpacity style={styles.buttonUpdate}>
//             <Text style={styles.updateProfileText}>Update Profile</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: 'transparent',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     lineHeight: 29.26,
//     marginTop: 78,
//   },
//   profileImgDiv: {
//     borderWidth: 1,
//     borderColor: 'transparent',
//     height: 125,
//     width: 125,
//     marginTop: 47,
//   },
//   profileImgCircle: {
//     height: 125,
//     width: 125,
//     borderWidth: 1,
//     borderColor: '#000000',
//     borderRadius: 71,
//     borderStyle: 'dashed',
//   },
//   profileImgIcon: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     width: '100%',
//     height: '100%',
//     borderRadius: 71,
//   },
//   userNameDiv: {
//     height: 62,
//     width: 303,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     marginTop: 50,
//   },
//   userEmailDiv: {
//     height: 62,
//     width: 303,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     marginTop: 50,
//   },
//   texts: {
//     fontSize: 18,
//     lineHeight: 21.94,
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderBottomWidth: 1,
//     borderTopColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'black',
//     paddingHorizontal: 10,
//     paddingVertical: 2,
//   },
//   buttonUpdate: {
//     backgroundColor: '#101C1D',
//     padding: 10,
//     borderRadius: 50,
//     width: '90%',
//     height: 60,
//     display: 'flex',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   updateProfileText: {
//     color: 'white',
//     fontSize: 20,
//     fontFamily: 'Montserrat-Bold',
//     textAlign: 'center',
//     lineHeight: 24.38,
//   },
//   buttonUpdateDiv: {
//     display: 'flex',
//     alignItems: 'center',
//     borderWidth: 0,
//     borderColor: 'transparent',
//     width: '100%',
//     marginTop: 90,
//   },
// });

// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import React, { useState } from 'react';
// import profileImgIcon from '../asset/profileImgIcon.png';
// import { auth, firestore } from '../config/firebase';
// import { firebase } from '@react-native-firebase/firestore';
// import { useAppSelector, useAppDispatch } from '../hooks/hooks';
// import { getUserData } from '../store/slices/userSlice';
// import ImagePicker from 'react-native-image-crop-picker';

// const Profile = () => {
//   const dispatch = useAppDispatch();
//   const userData = useAppSelector((state) => state.user.userData);
//   const userName = userData?.userName;
//   const email = auth().currentUser?.email;
//   const currentUserUID: string | null = auth().currentUser?.uid;
//   dispatch(getUserData(currentUserUID));

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageProfile = () => {
//     Alert.alert(
//       'Select Image Source',
//       'Choose the source for your image',
//       [
//         { text: 'Gallery', onPress: () => openImagePicker('gallery') },
//         { text: 'Camera', onPress: () => openImagePicker('camera') },
//         { text: 'Cancel', style: 'cancel' },
//       ],
//       { cancelable: true }
//     );
//   };

//   const openImagePicker = (source) => {
//     let imagePickerFunction;
//     if (source === 'gallery') {
//       imagePickerFunction = ImagePicker.openPicker;
//     } else if (source === 'camera') {
//       imagePickerFunction = ImagePicker.openCamera;
//     } else {
//       // Handle invalid source
//       return;
//     }

//     imagePickerFunction({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then((image) => {
//         setSelectedImage(image.path); // Set the selected image URI
//         // Upload the image to Firebase Storage here
//         // Example code:
//         const storageRef = firebase.storage().ref();
//         const imageRef = storageRef.child('profile_images/' + currentUserUID);
//         imageRef.putFile(image.path).then(() => {
//           console.log('Image uploaded successfully!');
//           // Get the download URL
//           imageRef.getDownloadURL().then((url) => {
//             console.log('Image download URL:', url);
//           });
//         });
//       })
//       .catch((error) => {
//         console.log('Image picker error:', error);
//       });
//   };

//   const handleChangeName=()=>{

//   }

//   return (
//         <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Profile Settings</Text>
//         <View style={styles.profileImgDiv}>
//           <TouchableOpacity onPress={handleImageProfile}>
//             <View style={styles.profileImgCircle}>
//               {selectedImage ? (
//                 <Image source={{ uri: selectedImage }} style={styles.profileImgIcon} />
//               ) : (
//                 <Image source={profileImgIcon} style={styles.profileImgIcon} />
//               )}
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.userNameDiv}>
//           <Text style={styles.texts}>Username</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             keyboardType="email-address"
//             defaultValue={userName}
//           />
//         </View>

//         <View style={styles.userEmailDiv}>
//           <Text style={styles.texts}>Email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder=""
//             keyboardType="email-address"
//             defaultValue={email}
//             editable={false}
//             onChangeText={handleChangeName}
//           />
//         </View>
//         <View style={{ width: 303, borderWidth: 1, borderColor: 'transparent' }}>
//           <TouchableOpacity>
//             <Text style={{ marginLeft: 'auto' }}>Update Password?</Text>
//           </TouchableOpacity>
//         </View>
//         {/* button*/}
//         <View style={styles.buttonUpdateDiv}>
//           <TouchableOpacity style={styles.buttonUpdate}>
//             <Text style={styles.updateProfileText}>Update Profile</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Profile;
// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: 'transparent',
//     alignItems: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     lineHeight: 29.26,
//     marginTop: 78,
//   },
//   profileImgDiv: {
//     borderWidth: 1,
//     borderColor: 'transparent',
//     height: 125,
//     width: 125,
//     marginTop: 47,
//   },
//   profileImgCircle: {
//     height: 125,
//     width: 125,
//     borderWidth: 1,
//     borderColor: '#000000',
//     borderRadius: 71,
//     borderStyle: 'dashed',
//   },
//   profileImgIcon: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     width: '100%',
//     height: '100%',
//     borderRadius: 71,
//   },
//   userNameDiv: {
//     height: 62,
//     width: 303,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     marginTop: 50,
//   },
//   userEmailDiv: {
//     height: 62,
//     width: 303,
//     borderWidth: 1,
//     borderColor: 'transparent',
//     marginTop: 50,
//   },
//   texts: {
//     fontSize: 18,
//     lineHeight: 21.94,
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderBottomWidth: 1,
//     borderTopColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderLeftColor: 'transparent',
//     borderBottomColor: 'black',
//     paddingHorizontal: 10,
//     paddingVertical: 2,
//   },
//   buttonUpdate: {
//     backgroundColor: '#101C1D',
//     padding: 10,
//     borderRadius: 50,
//     width: '90%',
//     height: 60,
//     display: 'flex',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   updateProfileText: {
//     color: 'white',
//     fontSize: 20,
//     fontFamily: 'Montserrat-Bold',
//     textAlign: 'center',
//     lineHeight: 24.38,
//   },
//   buttonUpdateDiv: {
//     display: 'flex',
//     alignItems: 'center',
//     borderWidth: 0,
//     borderColor: 'transparent',
//     width: '100%',
//     marginTop: 90,
//   },
// });

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import profileImgIcon from '../asset/profileImgIcon.png';
import {auth, firestore, storage} from '../config/firebase';
import {firebase} from '@react-native-firebase/firestore';
import {useAppSelector, useAppDispatch} from '../hooks/hooks';
import {getUserData} from '../store/slices/userSlice';
import ImagePicker from 'react-native-image-crop-picker';
// import { useNavigation } from '@react-navigation/native';

const Profile = ({navigation}: any) => {
  // const navigation=useNavigation()
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.user.userData);
  const userName = userData?.userName;
  const email = auth().currentUser?.email;
  const currentUserUID: string | null = auth().currentUser?.uid;
  const nowUser = auth().currentUser;
  dispatch(getUserData(currentUserUID));

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [newUserName, setNewUserName] = useState(null);
  const [image, setImage] = useState(null);
  const handleImageProfile = () => {
    Alert.alert(
      'Select Image Source',
      'Choose the source for your image',
      [
        {text: 'Gallery', onPress: () => openImagePicker('gallery')},
        {text: 'Camera', onPress: () => openImagePicker('camera')},
        {text: 'Cancel', style: 'cancel'},
      ],
      {cancelable: true},
    );
  };

  // const openImagePicker = source => {
  //   let imagePickerFunction;
  //   if (source === 'gallery') {
  //     imagePickerFunction = ImagePicker.openPicker;
  //   } else if (source === 'camera') {
  //     imagePickerFunction = ImagePicker.openCamera;
  //   } else {
  //     // Handle invalid source
  //     return;
  //   }

  //   imagePickerFunction({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   });
  //   setSelectedImage(image?.path); // Set the selected image URI
  //   console.log('image urlll', selectedImage);
  // Upload the image to Firebase Storage here
  // Example code:
  // const storageRef = firebase.storage().ref();
  // const imageRef = storageRef.child('profile_images/' + currentUserUID);
  // imageRef.putFile(image.path).then(() => {
  //   console.log('Image uploaded successfully!');
  //   // Get the download URL
  //   imageRef.getDownloadURL().then(url => {
  //     console.log('Image download URL:', url);
  //     setImage(url);
  //   });
  // });
  // })
  // .catch(error => {
  //   console.log('Image picker error:', error);
  // });

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        includeBase64: false,
        cropperCircleOverlay: true,
      });

      setSelectedImage(image.path);
    } catch (error) {}
  };
  const handleChangeName = (text: any) => {
    setNewUserName(text); // Update the new username
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    console.log('User profile updated!');
    try {
      let updatedImageURL = userData?.image || '';
      if (selectedImage) {
        const imageRef = storage()
          .ref()
          .child(`profile_images/${userData?.uid}`);
        await imageRef.putFile(selectedImage);
        updatedImageURL = await imageRef.getDownloadURL();
      }
      // Update the fields in the user document
      const updatedUserName = newUserName || userData?.userName || '';

      await firestore().collection('users').doc(nowUser?.uid).update({
        userName: updatedUserName,
        image: updatedImageURL,
      });
      setLoading(false);
      console.log('User profile updated successfully!');
    } catch (error) {
      console.error('Error updating user profile:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
    setLoading(false);
  };

  const handleNavigation = () => {
    navigation.navigate('UpdatePassword');
  };

  return (
    <ScrollView>
      {/* ... (rest of your component code) */}
      <View style={styles.container}>
        <Text style={styles.heading}>Profile Settings</Text>
        <View style={styles.profileImgDiv}>
          <TouchableOpacity onPress={handleImageProfile}>
            <View style={styles.profileImgCircle}>
              {userData ? (
                <Image
                  source={{uri: selectedImage || userData?.image}}
                  style={styles.profileImgIcon}
                />
              ) : (
                <Image source={profileImgIcon} style={styles.profileImgIcon} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.userNameDiv}>
          <Text style={styles.texts}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder={userData?.userName}
            keyboardType="email-address"
            onChangeText={handleChangeName}
          />
        </View>

        <View style={styles.userEmailDiv}>
          <Text style={styles.texts}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder={userData?.email}
            keyboardType="email-address"
            editable={false}
            onChangeText={handleChangeName}
          />
        </View>
        <View style={{width: 303, borderWidth: 1, borderColor: 'transparent'}}>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={{marginLeft: 'auto'}}>Update Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonUpdateDiv}>
          <TouchableOpacity
            style={styles.buttonUpdate}
            onPress={handleUpdateProfile}>
            <Text style={styles.updateProfileText}>
              {loading ? (
                <ActivityIndicator size={'large'} />
              ) : (
                'Update Profile'
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    lineHeight: 29.26,
    marginTop: 78,
  },
  profileImgDiv: {
    borderWidth: 1,
    borderColor: 'transparent',
    height: 125,
    width: 125,
    marginTop: 47,
  },
  profileImgCircle: {
    height: 125,
    width: 125,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 71,
    borderStyle: 'dashed',
  },
  profileImgIcon: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: 71,
  },
  userNameDiv: {
    height: 62,
    width: 303,
    borderWidth: 1,
    borderColor: 'transparent',
    marginTop: 50,
  },
  userEmailDiv: {
    height: 62,
    width: 303,
    borderWidth: 1,
    borderColor: 'transparent',
    marginTop: 50,
  },
  texts: {
    fontSize: 18,
    lineHeight: 21.94,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  buttonUpdate: {
    backgroundColor: '#101C1D',
    padding: 10,
    borderRadius: 50,
    width: '90%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    marginVertical: 20,
  },
  updateProfileText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    lineHeight: 24.38,
  },
  buttonUpdateDiv: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'transparent',
    width: '100%',
    marginTop: 90,
  },
});
