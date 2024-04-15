// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import SearchComp from '../components/search/SearchComp';
// import SearchIcon from '../../src/asset/images/searchIconSearchPage.png';
// import UncheckedLikeBtn from '../asset/images/uncheckedUnion.png';
// import CheckedLikeBtn from '../asset/images/checkedUnion.png';
// import {useAppDispatch, useAppSelector} from '../hooks/hooks';
// import {fetchData} from '../store/slices/dataSlice';
// import firestore from '@react-native-firebase/firestore';

// const Search = () => {
//   const [selectedType, setSelectedType] = useState('All'); // State to track selected type
//   const [favorites, setFavorites] = useState([]); // State to store favorites

//   // Fetch favorites when component mounts
//   useEffect(() => {
//     const fetchFavorites = async () => {
//       const favoritesRef = firestore().collection('favorites');
//       const snapshot = await favoritesRef.get();
//       const favoritesData = snapshot.docs.map(doc => doc.data());
//       setFavorites(favoritesData);
//     };
//     fetchFavorites();
//   }, []);

//   const dispatch = useAppDispatch();
//   dispatch(fetchData('donations'));
//   const allData = useAppSelector(state => state.data.allData);

//   const handleItemPress = item => {
//     setSelectedType(item.selectedType); // Update selected type
//   };

//   const handleSuggestedItemPress = item => {
//     console.log('Navigating to:', item.name);
//   };

//   // Filter data based on selected type
//   const filteredData =
//     selectedType === 'All'
//       ? allData
//       : allData.filter(item => item.selectedType === selectedType);

//   const addToFavorites = async item => {
//     try {
//       const favoritesRef = firestore().collection('favorites');
//       const doc = await favoritesRef.doc(item.serialNo).get();

//       if (doc.exists) {
//         // Item already exists in favorites, so remove it
//         await favoritesRef.doc(item.serialNo).delete();
//         console.log('Item removed from favorites successfully!');
//       } else {
//         // Item does not exist in favorites, so add it
//         await favoritesRef.doc(item.serialNo).set({
//           ...item,
//         });
//         console.log('Item added to favorites successfully!');
//       }
//     } catch (error) {
//       console.error('Error adding/removing item to/from favorites:', error);
//     }
//   };

//   // Check if item is in favorites
//   const isFavorite = item => {
//     return favorites.some(fav => fav.serialNo === item.serialNo);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{height: '10%', borderColor: 'transparent', borderWidth: 1}}>
//         <SearchComp
//           containerStyle={{
//             marginTop: 10,
//             marginBottom: 20,
//             borderColor: 'transparent',
//           }}
//         />
//       </View>
//       <View
//         style={{
//           height: '5%',
//           borderColor: 'red',
//           borderWidth: 1,
//           flexDirection: 'row',
//         }}>
//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={[{createdAt: 'All', selectedType: 'All'}, ...allData]}
//           contentContainerStyle={styles.flatListContent}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               onPress={() => handleItemPress(item)}
//               style={[
//                 styles.item,
//                 selectedType === item.selectedType && {
//                   backgroundColor: '#F6A530',
//                 },
//               ]}>
//               <Text
//                 style={[
//                   styles.itemText,
//                   selectedType === item.selectedType && {color: '#FFFFFF'},
//                   {whiteSpace: 'nowrap'},
//                 ]}>
//                 {item.selectedType}
//               </Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={item => item.createdAt.toString()}
//         />
//       </View>

//       <View style={{height: '85%'}}>
//         <FlatList
//           data={filteredData} // Use filtered data
//           renderItem={({item}) => (
//             <TouchableOpacity
//               onPress={() => handleSuggestedItemPress(item)}
//               style={styles.suggestedItem}
//               activeOpacity={1}>
//               {/* <Image
//                 source={
//                   item.imageUrl
//                     ? {uri: item.imageUrl}
//                     : require('../asset/images/dog2.jpg') // Placeholder image
//                 }
//                 style={styles.image}
//               /> */}
//               {item.imageUrl && (
//                 <Image source={{uri: item.imageUrl}} style={styles.image} />
//               )}

//               <View style={styles.card}>
//                 <Text style={styles.name}>{item.breed}</Text>
//                 <Text style={styles.font}>Age: {item.age} </Text>
//                 <Text style={styles.font}>
//                   {item.location} {'  '}
//                   <Image source={SearchIcon} style={styles.icon} />
//                 </Text>
//                 <View
//                   style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                   }}>
//                   <Text>{item.selectedGenderStatusType}</Text>
//                   <TouchableOpacity onPress={() => addToFavorites(item)}>
//                     <Image
//                       source={
//                         isFavorite(item) ? CheckedLikeBtn : UncheckedLikeBtn
//                       }
//                       style={{
//                         marginTop: 6,
//                         marginRight: 10,
//                         height: 50,
//                         width: 50,
//                       }}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={item => item.createdAt.toString()}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderColor: 'transparent',
//     borderWidth: 2,
//   },
//   item: {
//     marginHorizontal: 9,
//     height: 31,
//     width: 63,
//     borderRadius: 20,
//     borderColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   itemText: {
//     color: 'black',
//     flexDirection: 'row',
//     flexWrap: 'nowrap',
//   },
//   flatListContent: {
//     alignItems: 'center',
//     borderColor: 'red',
//     borderWidth: 2,
//   },
//   suggestedItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//     paddingLeft: 5,
//   },
//   image: {
//     width: 194,
//     height: 174,
//     borderRadius: 25,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     padding: 10,
//     shadowColor: '#000',
//     height: 126,
//     marginRight: 10,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   name: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   font: {
//     fontSize: 12,
//   },
// });

// export default Search;








import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import SearchComp from '../components/search/SearchComp';
import SearchIcon from '../../src/asset/images/searchIconSearchPage.png';
import UncheckedLikeBtn from '../asset/images/uncheckedUnion.png';
import CheckedLikeBtn from '../asset/images/checkedUnion.png';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchData } from '../store/slices/dataSlice';
import firestore from '@react-native-firebase/firestore';

const Search = () => {
  const [selectedType, setSelectedType] = useState('All'); // State to track selected type
  const [favorites, setFavorites] = useState([]); // State to store favorites

  // Fetch favorites when component mounts
  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesRef = firestore().collection('favorites');
      const snapshot = await favoritesRef.get();
      const favoritesData = snapshot.docs.map(doc => doc.data());
      setFavorites(favoritesData);
    };
    fetchFavorites();
  }, []);

  const dispatch = useAppDispatch();
  dispatch(fetchData('donations'));
  const allData = useAppSelector(state => state.data.allData);

  const handleItemPress = item => {
    setSelectedType(item.selectedType); // Update selected type
  };

  const handleSuggestedItemPress = item => {
    console.log('Navigating to:', item.name);
  };

  // Filter data based on selected type
  const filteredData =
    selectedType === 'All'
      ? allData
      : allData.filter(item => item.selectedType === selectedType);

  const addToFavorites = async item => {
    try {
      const favoritesRef = firestore().collection('favorites');
      const doc = await favoritesRef.doc(item.serialNo).get();

      if (doc.exists) {
        // Item already exists in favorites, so remove it
        await favoritesRef.doc(item.serialNo).delete();
        console.log('Item removed from favorites successfully!');
      } else {
        // Item does not exist in favorites, so add it
        await favoritesRef.doc(item.serialNo).set({
          ...item,
        });
        console.log('Item added to favorites successfully!');
      }
    } catch (error) {
      console.error('Error adding/removing item to/from favorites:', error);
    }
  };

  // Check if item is in favorites
  const isFavorite = item => {
    return favorites.some(fav => fav.serialNo === item.serialNo);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: '10%', borderColor: 'transparent', borderWidth: 1 }}>
        <SearchComp
          containerStyle={{
            marginTop: 10,
            marginBottom: 20,
            borderColor: 'transparent',
          }}
        />
      </View>
      <View
        style={{
          height: '5%',
          borderColor: 'red',
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[{ createdAt: 'All', selectedType: 'All' }, ...allData]}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleItemPress(item)}
              style={[
                styles.item,
                selectedType === item.selectedType && {
                  backgroundColor: '#F6A530',
                },
              ]}>
              <Text
                style={[
                  styles.itemText,
                  selectedType === item.selectedType && { color: '#FFFFFF' },
                  { whiteSpace: 'nowrap' },
                ]}>
                {item.selectedType}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.createdAt.toString()}
        />
      </View>

      <View style={{ height: '85%' }}>
        <FlatList
          data={filteredData} // Use filtered data
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSuggestedItemPress(item)}
              style={styles.suggestedItem}
              activeOpacity={1}>
              <Image
                source={item.imageUrl ? { uri: item.imageUrl } : require('../asset/images/dog2.jpg')}
                style={styles.image}
              />
              <View style={styles.card}>
                <Text style={styles.name}>{item.breed}</Text>
                <Text style={styles.font}>Age: {item.age} </Text>
                <Text style={styles.font}>
                  {item.location} {'  '}
                  <Image source={SearchIcon} style={styles.icon} />
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{item.selectedGenderStatusType}</Text>
                  <TouchableOpacity onPress={() => addToFavorites(item)}>
                    <Image
                      source={isFavorite(item) ? CheckedLikeBtn : UncheckedLikeBtn}
                      style={{
                        marginTop: 6,
                        marginRight: 10,
                        height: 50,
                        width: 50,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.createdAt.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 2,
  },
  item: {
    marginHorizontal: 9,
    height: 31,
    width: 63,
    borderRadius: 20,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: 'black',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  flatListContent: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
  suggestedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 5,
  },
  image: {
    width: 194,
    height: 174,
    borderRadius: 25,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    shadowColor: '#000',
    height: 126,
    marginRight: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  font: {
    fontSize: 12,
  },
});

export default Search;
