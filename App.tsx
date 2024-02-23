// // import React from 'react'
// // import { Text, View } from 'react-native'
// // import SignUp from './src/screens/auth/signup/SignUp'
// // import Login from './src/screens/auth/login/Login'
// // import RecoverPass from './src/screens/auth/recoverPass/RecoverPass'
// // import Navigator from "./src/navigation/Navigator"
// // import Home from './src/screens/home/home'
// // // import SearchBar from './src/components/searchBar'
// // import SearchBar from './src/components/searchBar/SearchBar'
// // import Drawr from './src/components/drawr/Drawr'



// // const App = () => {

// //   const data = [
// //     { id: 1, type: 'Cat', image: require('./src/assets/images/cat.jpg') }, // Assuming images are in the assets folder
// //     { id: 2, type: 'Dog', image: require('./src/assets/images/dog.jpg') },
// //     { id: 3, type: 'Icon', image: require('./src/assets/images/searchIcon.png') },
// //     // Add more objects as needed
// //   ];
 
  
    

// //   return (
// //     <Home  data={data}  />
// //     // <Drawr />
    
// //     // <SearchBar />
  
// //   );
// // };

// // export default App;
// import React from 'react';
// import { View } from 'react-native';
// import SignUp from './src/screens/auth/signup/SignUp';
// import Login from './src/screens/auth/login/Login';
// import RecoverPass from './src/screens/auth/recoverPass/RecoverPass';
// import Navigator from "./src/navigation/Navigator";
// import Home from './src/screens/home/Home';
// import SearchBar from './src/components/searchBar/SearchBar';
// import Drawr from './src/components/drawr/Drawr';

// const App = () => {

//   interface DataItem {
//     id: number;
//     type: string;
//     image: any; // Adjust this type as per your specific requirements
//   }
 

//   const data : DataItem[]= [
//     { id: 1, type: 'Cat', image: require('./src/assets/images/cat.jpg') },
//     { id: 2, type: 'Dog', image: require('./src/assets/images/dog.jpg') },
//     { id: 3, type: 'Icon', image: require('./src/assets/images/searchIcon.png') },
//     // Add more objects as needed
//   ];
 
//   return (
//     <View>
//       <Home data={data} />
//       <Drawr />
//       <SearchBar />
//     </View>
//   );
// };

// export default App;
import React from 'react';
import { View } from 'react-native';
import Home from './src/screens/home/home';
import SearchBar from './src/components/searchBar/SearchBar';
import Drawr from './src/components/drawr/Drawr';

interface DataItem {
  id: number;
  type: string;
  image: any; // Adjust this type as per your specific requirements
}

const App = () => {
  const data: DataItem[] = [
    { id: 1, type: 'Cat', image: require('./src/assets/images/cat.jpg') },
    { id: 2, type: 'Dog', image: require('./src/assets/images/dog.jpg') },
    { id: 3, type: 'Squerl', image: require('./src/assets/images/squerrl.jpg') },
    { id: 4, type: 'Rabit', image: require('./src/assets/images/rabit.jpg') },
    { id: 5, type: 'Parrot', image: require('./src/assets/images/parrot.jpg') },
    // { id: 5, type: 'Cat', image: require('./src/assets/images/cat.jpg') },
    // { id: 7, type: 'Dog', image: require('./src/assets/images/dog.jpg') },
    // { id: 8, type: 'Cat', image: require('./src/assets/images/cat.jpg') },
    // { id: 9, type: 'Dog', image: require('./src/assets/images/dog.jpg') },
    // { id: 3, type: 'Icon', image: require('./src/assets/images/searchIcon.png') },
    // Add more objects as needed
  ];

  return (
    <View>
      <Home data={data} />
      {/* <Drawr /> */}
      {/* <SearchBar /> */}
    </View>
  );
};

export default App;
