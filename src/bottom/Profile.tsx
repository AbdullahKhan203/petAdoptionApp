import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import profileImgIcon from "../asset/profileImgIcon.png";
  const Profile = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Profile Settings</Text>
          <View style={styles.profileImgDiv}>
            <View style={styles.profileImgCircle}></View>
            <Image source={profileImgIcon} style={styles.profileImgIcon} />
          </View>
          <View style={styles.userNameDiv}>
            <Text style={styles.texts}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="email-address"
            />
          </View>
  
          <View style={styles.userEmailDiv}>
            <Text style={styles.texts}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="email-address"
            />
          </View>
          <View style={{width:303,borderWidth:1,borderColor:'transparent'}}>
            <TouchableOpacity>
              <Text style={{marginLeft:'auto'}}>Update Password?</Text>
            </TouchableOpacity>
          </View>
          {/* button*/}
          <View style={styles.buttonUpdateDiv}>
            <TouchableOpacity style={styles.buttonUpdate}>
              <Text style={styles.updateProfileText}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      height: "100%",
      width: "100%",
      // marginTop: 30,
      borderWidth: 1,
      borderColor: "transparent",
      alignItems: "center",
    },
    heading: {
      fontSize: 24,
      lineHeight: 29.26,
      marginTop: 78,
    },
    // profileImgDiv: {
    //   display: "flex",
    //   flexDirection: "row", // Arrange elements horizontally
    //   justifyContent: "flex-end", // Align items at the end
    //   alignItems: "center",
    //   borderWidth: 1,
    //   borderColor: "red",
    //   height: 140,
    //   width: 140,
    //   marginTop: 47,
    // },
    // profileImgCircle: {
    //   height: 125,
    //   width: 125,
    //   borderWidth: 1,
    //   borderColor: "#000000",
    //   // marginTop:47,
    //   borderRadius: 71,
    //   borderStyle: "dashed",
    //   // marginLeft: 100,
    // },
    // profileImgIcon: {
    //   marginTop: 90,
    //   // marginRight:20,
    // },
    profileImgDiv: {
      borderWidth: 1,
      borderColor: "transparent",
      height: 125,
      width: 125,
      marginTop: 47,
    },
    profileImgCircle: {
      height: 125,
      width: 125,
      borderWidth: 1,
      borderColor: "#000000",
      // marginTop:47,
      borderRadius: 71,
      borderStyle: "dashed",
      // marginLeft: 100,
    },
    profileImgIcon: {
      // marginTop: 90,
      // marginRight:20,
      position: "absolute",
      left: 98,
      top: 100,
    },
    userNameDiv: {
      height: 62,
      width: 303,
      borderWidth: 1,
      borderColor: "transparent",
      marginTop: 50,
    },
    userEmailDiv: {
      height: 62,
      width: 303,
      borderWidth: 1,
      borderColor: "transparent",
      marginTop: 50,
    },
    texts: {
      fontSize: 18,
      lineHeight: 21.94,
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
      paddingVertical: 2,
    },
    buttonUpdate: {
      backgroundColor: "#101C1D",
      padding: 10,
      borderRadius: 50,
      width: "90%",
      height: 60,
      // marginHorizontal:'auto',
      display: "flex",
      justifyContent: "center",
      // alignItems
      marginVertical: 20,
    },
    updateProfileText: {
      color: "white",
      fontSize: 20,
      fontFamily: "Montserrat-Bold",
      textAlign: "center",
      lineHeight: 24.38,
    },
    buttonUpdateDiv: {
      display: "flex",
      alignItems: "center",
      borderWidth: 0,
      borderColor: "transparent",
      width: "100%",
      marginTop: 90,
    },
  });
  