import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const UpdatePassword = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingDiv}>
          <Text style={styles.heading}>Update Password</Text>
        </View>
        <View style={styles.currentPasswordDiv}>
          <Text style={styles.texts}>Current Password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="email-address"
          />
        </View>
        <View style={styles.newPasswordDiv}>
          <Text style={styles.texts}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="email-address"
          />
        </View>
        <View style={styles.newPasswordDiv}>
          <Text style={styles.texts}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="email-address"
          />
        </View>
        <View style={styles.buttonUpdateDiv}>
          <TouchableOpacity style={styles.buttonUpdate}>
            <Text style={styles.updatePasswordText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100%",
    width: "100%",
    marginTop: 30,
    borderWidth: 2,
    borderColor: "transparent",
    alignItems: "center",
  },
  headingDiv: {
    borderWidth: 1,
    borderColor: "transparent",
    alignItems: "center",
    marginTop: 78,
    width: 303,
  },
  heading: {
    fontSize: 24,
    lineHeight: 29.26,
  },
  currentPasswordDiv: {
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
  newPasswordDiv: {
    height: 62,
    width: 303,
    borderWidth: 1,
    borderColor: "transparent",
    marginTop: 50,
  },
  buttonUpdateDiv: {
    display: "flex",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "transparent",
    width: "100%",
    marginTop: 160,
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
  updatePasswordText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    lineHeight: 24.38,
  },
});
