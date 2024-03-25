import { View, Text, TextInput, StyleSheet, Button, Alert,TouchableOpacity } from "react-native";
import React, { useState } from "react";
// import { auth } from "../../../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';



interface LoginData{
    email:string,
    password:string,
}


export default function Login({navigation}:any) {
//   const navigation = useNavigation();
    const [loginData,setLoginData]=useState<LoginData>({
        email: '',
        password: '',
      })

    const handleChange = (name: keyof LoginData, value: string) => {
        setLoginData({
          ...loginData,
          [name]: value,
        });
      };

   const handleLogin=()=>{
     

     const {email,password}=loginData

     if(!email){
      return Alert.alert("plz enter email");
  }
  if(password.length<6){
      return Alert.alert("plz enter password of atleast 6 cahracters");
  }
  console.log(loginData);

//   auth()
//   .signInWithEmailAndPassword(email, password)
//   .then(() => {
//     console.log('User account  signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });


     
     
    }


    

//   const handleSignUpPress = () => {
//     navigation.navigate('SignUp');
//     // navigation.navigate('RecoverPass');
//   };
//   const handleForgetPress = () => {
//     // navigation.navigate('SignUp');
//     navigation.navigate('RecoverPass');
//   };


  const [isSelected, setSelection] = useState(false);
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.emailDiv}>
          <Text style={styles.texts}>Email</Text>
          <TextInput style={styles.input}
           placeholder="" 
            keyboardType="email-address" 
            value={loginData.email}
            onChangeText={value => handleChange('email', value)}
            />
        </View>
        <View style={styles.passwordDiv}>
          <Text style={styles.texts}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder=""
            value={loginData.password}
            onChangeText={value => handleChange('password', value)}
          />
        </View>
        <View>
          <Text style={styles.forgotPassword} 
        //   onPress={handleForgetPress}
          >Forgot password?</Text>
        </View>
        <View>
          {/* <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      /> */}
          <Text style={styles.termServies}>
            I agree
            <Text style={styles.underline}> terms and services</Text> and
            <Text style={styles.underline}> Privacy policy</Text>
          </Text>
        </View>
        {/* button login */}
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={handleLogin}  style={styles.buttonLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={styles.buttonSignup}
        //    onPress={handleSignUpPress}
           >
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    borderColor: "transparent",

    justifyContent: "center",
    // alignItems:"center",
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  main: {
    paddingHorizontal: 32,
    borderColor: "transparent",
    borderWidth: 2,
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
    fontFamily:"Montserrat-SemiBold",
    lineHeight:21.94,
  },
  heading: {
    //    marginTop:50,
    //    marginLeft:29,
    marginVertical: 10,
    fontSize: 36,
    //   fontWeight: '800',
      fontFamily:"Montserrat-ExtraBold",
      lineHeight:43,
  },

  input: {
    // height: 30,
    width: "100%",
    // backgroundColor:'red',
    borderWidth: 1,
    // border
    borderBottomWidth: 1, // Border only at the bottom
    borderTopColor: "transparent", // Transparent top border
    borderRightColor: "transparent", // Transparent right border
    borderLeftColor: "transparent", // Transparent left border
    borderBottomColor: "black",
// fontSize:50,
    paddingHorizontal: 10,
    paddingVertical:2,
  },
  forgotPassword: {
    textAlign: "right",
    fontFamily:"Montserrat-SemiBold",
    fontSize:14,
    lineHeight:17.07,
  },
  // checkbox: {
  //   alignSelf: 'center',
  // },
  // label: {
  //   margin: 8,
  // },
  underline: {
    textDecorationLine: "underline",
  },
  buttonLogin:{
    backgroundColor:'#101C1D',
    padding: 10,
    borderRadius: 50,
    width:'70%',
    height:60,
    // marginHorizontal:'auto',
    display:'flex',
    justifyContent:'center',
    // alignItems
    marginVertical:20,
  },
  loginText:{
    color: 'white',
    fontSize: 20,
    fontFamily:"Montserrat-Bold",
    textAlign: 'center',
    lineHeight:24.38,
  },
  buttonSignup:{

  },
  signupText:{
    fontSize: 20,
    fontFamily:"Montserrat-Bold",
    textAlign: 'center',
    lineHeight:24.38,
  },
  termServies:{
    fontFamily:"Montserrat-SemiBold",
    fontSize:14,
    lineHeight:17.07,
  }
});
