// import { View, Text } from "react-native";
// import React from "react";
// import { StyleSheet } from "react-native";

// const DonationRequests = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Donation Requests</Text>
//       </View>
//       <View style={styles.card}>
//         <Text style={styles.headerText}>Donation Requests</Text>
//       </View>
//     </View>
//   );
// };

// export default DonationRequests;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "red",
//     marginTop: 30,
//     alignItems:'center',
//   },
//   header: {
//     height: "5%",
//     backgroundColor: "transparent",
//     width:'100%',
//   },
//   headerText: {
//     fontSize: 24,
//     marginLeft: 20,
//   },
//   card: {
//     width: 320,
//     height: 184,
//     borderWidth: 1,
//     borderColor: "green",
//     borderRadius:20,

//   },
// });

// import { View, Text } from "react-native";
// import React from "react";
// import { StyleSheet } from "react-native";

// const DonationRequests = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Donation Requests</Text>
//       </View>

//    <View style={styles.card}>
//    <View style={styles.box}>
//    <Text >Donation Requests</Text>
//     </View>
//     </View>
//     </View>
//   );
// };

// export default DonationRequests;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "red",
//     marginTop: 30,
//     alignItems: "center",
//   },
//   header: {
//     height: "5%",
//     backgroundColor: "transparent",
//     width: "100%",
//   },
//   headerText: {
//     fontSize: 24,
//     marginLeft: 20,
//   },

//   card:{
//     width:'100%',
//     alignItems:'center',
//   },
//   box: {
//     marginTop:10,
//     width: '90%',
//     height: 184,
//     borderWidth: 1,
//     borderColor: "green",
//     borderRadius: 20,

//   },

// });

import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import turtle from "../../asset/images/turtle.jpg";
// import { TouchableOpacity } from "react-native-gesture-handler";

const DonationRequests = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Donation Requests</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.requestInfo}>
          <View style={styles.leftSide}>
            <Image source={turtle} style={styles.profileImg} />
          </View>
          <View style={styles.rightSide}>
            <Text  style={styles.name}>Talha</Text>
            <Text  style={styles.breed}>Cavachon.dog</Text>
            <Text  style={styles.email}>info@techloset.com</Text>
            <Text  style={styles.location}>Lahore, PK.</Text>
            <Text  style={styles.date}>January 21, 2024</Text>
          </View>
        </View>
        <View style={styles.contactBtnDiv}>
          <TouchableOpacity style={styles.contactBtn}>
            <Text style={styles.contactBtnText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DonationRequests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "transparent",
    marginTop: 10,
    alignItems: "center",
  },
  header: {
    height: "5%",
    backgroundColor: "transparent",
    width: "100%",
    marginVertical: 10,
  },
  headerText: {
    fontSize: 24,
    marginLeft: 20,
  },
  card: {
    width: "90%",
    height: 194,
    marginTop: 10,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Adjust the opacity as needed
    shadowRadius: 4, // Adjust the shadow radius as needed
    elevation: 15, // Android
    borderRadius: 20,
    backgroundColor: "white", // Make sure to set a background color if the parent doesn't have one
  },
  requestInfo: {
    height: "65%",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    flexDirection: "row",
  },
  contactBtnDiv: {
    height: "35%",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  leftSide: {
    borderWidth: 1,
    borderColor: "transparent",
    height: "100%",
    width: "35%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  rightSide: {
    borderWidth: 1,
    borderColor: "transparent",
    height: "100%",
    width: "65%",
    borderRadius: 20,
    justifyContent:'center',
    
  },
  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "transparent",
  },
  contactBtn: {
    height:56,
    width:'90%',
    backgroundColor:"#101C1D",
    borderRadius:34,
    justifyContent:'center',
    alignItems:"center",
  },
  contactBtnText:{
    color:'#FFFFFF',
  },
  name:{
    fontSize:18,
    lineHeight:21.94,
    marginLeft:10,
},
breed:{
    fontSize:18,
    lineHeight:21.94,
    marginLeft:10,
},
email:{
    fontSize:10,
    lineHeight:12.19,
    marginLeft:10,
},
location:{
    fontSize:10,
    lineHeight:12.19,
    marginLeft:10,
},
date:{
    fontSize:10,
    lineHeight:12.19,
    marginLeft:10,
},
});
