import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SearchBarIcon } from "../../asset/search-icon-white.png";
const SearchIconWhite = require("../../asset/search-icon-white.png");
const SearchComp = ({ containerStyle } :any) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput style={styles.input} placeholder="Search for a pet" />
      <TouchableOpacity style={styles.button}>
        <Image source={SearchIconWhite} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "red",
    // flexDirection: 'row',
    //  flexWrap: 'wrap',
    display: "flex",
     alignItems:'center',
     justifyContent:'center',
    // flexDirection:"col",
    marginTop: 30,
    height: 54,
    
  },
  input: {
    borderRadius: 20,
    // borderWidth: 1,
    paddingHorizontal: 20,
    height: 44,
    width: "100%",
    backgroundColor:'#e5e5e5',
  },
  button: {
    height: 54,
    // width: 82,
    backgroundColor: "black",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:'20%',
    // marginLeft:200,
    position:'absolute',
    left:'85%',
  },
  image: {
    height: 30.22,
    width: 30.22,

  },
});


// import React from "react";
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

// const SearchIconWhite = require("../../asset/search-icon-white.png");

// const Search = ({ containerStyle, inputStyle, buttonStyle, imageStyle, ...props }) => {
//   return (
//     <View style={[styles.container, containerStyle]}>
//       <TextInput style={[styles.input, inputStyle]} placeholder="Search for a pet" {...props} />
//       <TouchableOpacity style={[styles.button, buttonStyle]}>
//         <Image source={SearchIconWhite} style={[styles.image, imageStyle]} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Search;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: "red",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 30,
//     height: 54,
//   },
//   input: {
//     borderRadius: 20,
//     paddingHorizontal: 20,
//     height: 44,
//     width: "100%",
//     backgroundColor: "#e5e5e5",
//   },
//   button: {
//     height: 54,
//     backgroundColor: "black",
//     borderRadius: 20,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "20%",
//     position: "absolute",
//     left: "85%",
//   },
//   image: {
//     height: 30.22,
//     width: 30.22,
//   },
// });
