import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import SearchComp from '../components/search/SearchComp';
import dog1 from '../asset/images/dog1.jpg';
import dog2 from '../asset/images/dog2.jpg';
import SearchIcon from '../../src/asset/images/searchIconSearchPage.png';
import UncheckedLikeBtn from '../asset/images/uncheckedUnion.png';
import CheckedLikeBtn from '../asset/images/checkedUnion.png';

// Import suggested data from your database

const Search = () => {
  const [categories, setCategories] = useState([
    {name: 'Dogs', key: '1'},
    {name: 'Cats', key: '2'},
    {name: 'Bunnies', key: '3'},
    {name: 'Birds', key: '4'},
    {name: 'Turtle', key: '5'},
  ]);

  // Example suggested data
  const [suggestedData, setSuggestedData] = useState([
    {
      id: 1,
      name: 'John',
      age: 25,
      location: 'New York',
      gender: 'Male',
      image: dog1,
    },
    {
      id: 2,
      name: 'Emily',
      age: 30,
      location: 'Los Angeles',
      gender: 'Female',
      image: dog2,
    },
    {
      id: 3,
      name: 'John',
      age: 25,
      location: 'New York',
      gender: 'Male',
      image: dog1,
    },
    {
      id: 4,
      name: 'Emily',
      age: 30,
      location: 'Los Angeles',
      gender: 'Female',
      image: dog2,
    },
    {
      id: 5,
      name: 'John',
      age: 25,
      location: 'New York',
      gender: 'Male',
      image: dog1,
    },
    {
      id: 6,
      name: 'Emily',
      age: 30,
      location: 'Los Angeles',
      gender: 'Female',
      image: dog2,
    },
    {
      id: 7,
      name: 'John',
      age: 25,
      location: 'New York',
      gender: 'Male',
      image: dog1,
    },
    {
      id: 8,
      name: 'Emily',
      age: 30,
      location: 'Los Angeles',
      gender: 'Female',
      image: dog2,
    },
    // Add more data as needed
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item: any) => {
    setSelectedItem(item.key);
  };

  const handleSuggestedItemPress = (item: any) => {
    // Navigation logic goes here
    console.log('Navigating to:', item.name);
  };

  return (
    <View style={styles.container}>
      <SearchComp
        containerStyle={{
          marginTop: 20,
          marginBottom: 20,
          borderColor: 'transparent',
        }}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleItemPress(item)}
            style={[
              styles.item,
              selectedItem === item.key && {backgroundColor: '#F6A530'},
            ]}>
            <Text
              style={[
                styles.itemText,
                selectedItem === item.key && {color: '#FFFFFF'},
              ]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={suggestedData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleSuggestedItemPress(item)}
            style={styles.suggestedItem}
            activeOpacity={1}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.font}>Age {item.age} </Text>

              <Text style={styles.font}>
                {item.location} <Image source={SearchIcon} />{' '}
              </Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>{item.gender}</Text>
                <Image
                  style={{marginTop: 6, marginRight: 10}}
                  source={UncheckedLikeBtn}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 2,
    // minHeight:100,
    // height:900,
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
    // marginRight: 10,
  },
  // details: {
  //   flex: 1,
  // },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 10, // Keep only right border radius
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

