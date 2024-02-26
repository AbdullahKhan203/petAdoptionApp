import React from 'react';
import { View } from 'react-native';
import Home from './src/screens/home/home';
import SearchBar from './src/components/searchBar/SearchBar';
import Drawr from './src/components/drawr/Drawr';

interface DataItem {
  id: string;
  type: string;
  image: any; // Adjust this type as per your specific requirements
}

const App = () => {
  const data: DataItem[] = [
    { id: '1', type: 'Cat', image: require('./src/assets/images/cat.jpg') },
    { id: '2', type: 'Dog', image: require('./src/assets/images/dog.jpg') },
    { id: '3', type: 'Squerl', image: require('./src/assets/images/squerrl.jpg') },
    { id: '4', type: 'Rabit', image: require('./src/assets/images/rabit.jpg') },
    { id: '5', type: 'Parrot', image: require('./src/assets/images/parrot.jpg') },
    { id: '6', type: 'Rat', image: require('./src/assets/images/choha.jpg') },
    { id: '7', type: 'Turtle', image: require('./src/assets/images/turtle.jpg') },
    { id: '8', type: 'Sparow', image: require('./src/assets/images/sparrow.jpg') },
    { id: '9', type: 'Fish', image: require('./src/assets/images/fish.jpg') },
    { id: '10', type: 'Guinea pig', image: require('./src/assets/images/Guinea-pig.jpg') },
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
