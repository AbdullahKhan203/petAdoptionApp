import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {auth} from '../../../config/firebase';
  import { useNavigation } from "@react-navigation/native";
  
  interface FormData {
    userName: string;
    email: string;
    password: string;
  }
  
  export default function SignUp() {
    const navigation = useNavigation();
  
    const [formData, setFormData] = useState<FormData>({
      userName: '',
      email: '',
      password: '',
    });
  
    const handleChange = (name: keyof FormData, value: string) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSignup = () => {
      let {userName,email,password}=formData
      if(!userName){
       return Alert.alert("plz enter user name");
      }
      if(!email){
          return Alert.alert("plz enter email");
      }
      if(password.length<6){
          return Alert.alert("plz enter password of atleast 6 cahracters");
      }
      console.log(formData);
      setFormData({
          userName: '',
          email: '',
          password: '',
        })
      // Place your signup logic here
      auth()
    .createUserWithEmailAndPassword(email,password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  
    };
  
    const handleSignUpPress = () => {
    //   navigation.navigate('Login');
      // navigation.navigate('Login');
      console.log(formData);
      
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.heading}>SignUp</Text>
          <View style={styles.userNameDiv}>
            <Text style={styles.texts}>UserName</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              value={formData.userName}
              onChangeText={value => handleChange('userName', value)}
            />
            
          </View>
          <View style={styles.emailDiv}>
            <Text style={styles.texts}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="email-address"
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
              // autoCapitalize="none"
            />
            
          </View>
          <View style={styles.passwordDiv}>
            <Text style={styles.texts}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={value => handleChange('password', value)}
              secureTextEntry={true}
              placeholder=""
              value={formData.password}
            />
            
          </View>
          {/* <View>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </View> */}
          <View>
            <Text style={styles.termServies}>
              I agree
              <Text style={styles.underline}> terms and services</Text> and
              <Text style={styles.underline}> Privacy policy</Text>
            </Text>
          </View>
          {/* button signup */}
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={handleSignup} style={styles.buttonSignup}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          {/* button login */}
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.buttonLogin} 
            onPress={handleSignUpPress}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      borderColor: 'transparent',
  
      justifyContent: 'center',
      // alignItems:"center",
      backgroundColor: 'transparent',
      borderWidth: 2,
    },
    main: {
      paddingHorizontal: 32,
      borderColor: 'transparent',
      borderWidth: 2,
    },
    userNameDiv: {
      marginVertical: 10,
    },
    emailDiv: {
      // backgroundColor:'red',
      // borderWidth: 0,
      marginVertical: 10,
    },
    passwordDiv: {
      // backgroundColor:'red',
      // borderWidth: 0,
      marginVertical: 10,
    },
    texts: {
      fontSize: 18,
      fontFamily: 'Montserrat-SemiBold',
      lineHeight: 21.94,
    },
    heading: {
      //    marginTop:50,
      //    marginLeft:29,
      marginVertical: 10,
      fontSize: 36,
      //   fontWeight: '800',
      fontFamily: 'Montserrat-ExtraBold',
      lineHeight: 43,
    },
  
    input: {
      // height: 30,
      width: '100%',
      // backgroundColor:'red',
      borderWidth: 1,
      // border
      borderBottomWidth: 1, // Border only at the bottom
      borderTopColor: 'transparent', // Transparent top border
      borderRightColor: 'transparent', // Transparent right border
      borderLeftColor: 'transparent', // Transparent left border
      borderBottomColor: 'black',
      paddingVertical: 2,
      paddingHorizontal: 10,
    },
    forgotPassword: {
      textAlign: 'right',
    },
    // checkbox: {
    //   alignSelf: 'center',
    // },
    // label: {
    //   margin: 8,
    // },
    underline: {
      textDecorationLine: 'underline',
    },
    buttonLogin: {},
    loginText: {
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      textAlign: 'center',
      lineHeight: 24.38,
    },
    buttonSignup: {
      backgroundColor: '#101C1D',
      padding: 10,
      borderRadius: 50,
      width: '70%',
      height: 60,
      // marginHorizontal:'auto',
      display: 'flex',
      justifyContent: 'center',
      // alignItems
      marginVertical: 20,
    },
    signupText: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      textAlign: 'center',
      lineHeight: 24.38,
    },
    termServies: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 14,
      lineHeight: 17.07,
    },
  });
  
  
  
  
  