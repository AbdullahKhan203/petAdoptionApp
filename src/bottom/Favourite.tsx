import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import plusIcon from '../asset/plusIcon.png';
import turtleImg from '../asset/images/turtle.jpg';
import UncheckedLikeBtn from '../asset/images/uncheckedUnion.png';
import checkedLikeBtn from '../asset/images/checkedUnion.png';
import SearchIcon from '../asset/images/searchIconSearchPage.png';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {fetchFavorites, removeFavorite} from '../store/slices/favouriteSlice'; // Import removeFavorite action
import {auth} from '../config/firebase';

const Favourite = () => {
  const currentUserEmail = auth().currentUser?.email;

  const dispatch = useAppDispatch();
  dispatch(fetchFavorites('favorites'));
 
 
  // const favourites = useAppSelector(state => state.favourite.favorites);

  // useEffect(() => {
  //   console.log('favourites in favouirte bottm', favourites);
  // }, [favourites]);


  const allFavorites = useAppSelector(state => state.favourite.favorites);
  
  // Filter favorites based on current user's email
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    if (currentUserEmail) {
      const filtered = allFavorites.filter(item => item.email === currentUserEmail);
      setFilteredFavorites(filtered);
    }
  }, [currentUserEmail, allFavorites]);

  // Function to remove item from favorites
  const handleRemoveFavorite = (itemId: string) => {
    dispatch(removeFavorite('favorites', itemId)); // Dispatch removeFavorite action with collectionName and itemId
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favourites</Text>
        <Image source={plusIcon} style={styles.plusIcon} />
      </View>

      <View
        style={{
          height: '95%',
          width: '100%',
          borderColor: 'red',
          borderWidth: 1,
        }}>
        <ScrollView>
          <FlatList
            data={filteredFavorites}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.suggestedItem} activeOpacity={1}>
                <Image source={{uri: item.imageUrl}} style={styles.image} />
                <View style={styles.card}>
                  <Text style={styles.name}>{item.breed}</Text>
                  <Text style={styles.age}>Age {item.age} months </Text>
                  <Text style={styles.location}>
                    {item.location} <Image source={SearchIcon} />{' '}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.gender}>
                      {item.selectedGenderStatusType}
                    </Text>
                    <TouchableOpacity
                      onPress={() => handleRemoveFavorite(item.id)}>
                      <Image
                        style={{marginTop: 6, marginRight: 10}}
                        source={checkedLikeBtn}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  header: {
    height: '5%',
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  plusIcon: {
    height: 30,
    width: 30,
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
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  age: {
    fontSize: 12,
  },
  location: {
    fontSize: 12,
  },
  gender: {
    fontSize: 12,
  },
  suggestedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 5,
    width: '100%',
  },
  headerText: {
    fontSize: 24,
    lineHeight: 29.26,
  },
});
