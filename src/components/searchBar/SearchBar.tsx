// import React from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// // import { SearchBar } from 'react-native-screens';

// const SearchBar = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter text..."
//         />
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Button</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     borderWidth:2,
//     borderColor:'red',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     // paddingHorizontal: 20,
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     // paddingVertmical: 2,
//     marginVertical:3,
//     // marginRight: 10,
//   },
//   button: {
//     width: '20%',
//     backgroundColor: 'blue',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default SearchBar;

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a pet"
        placeholderTextColor="#888"
      />
      {/* Magnifying glass icon */}
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <View style={styles.iconStick} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStick: {
    width: 2,
    height: 10,
    backgroundColor: 'white',
  },
});

export default SearchBar;
