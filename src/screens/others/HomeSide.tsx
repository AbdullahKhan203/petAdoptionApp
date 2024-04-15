import {
  View,
  Text,
  Image,
  StyleSheet,
  DrawerLayoutAndroid,
  FlatList,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import hamberger from '../../asset/hamberger.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Search from '../../components/search/SearchComp';
// animal images
import cat from '../../asset/images/cat.jpg';
import dog from '../../asset/images/dog.jpg';
import bunnies from '../../asset/images/bunnies.jpeg';
import sparrow from '../../asset/images/sparrow.jpg';
import turtle from '../../asset/images/turtle.jpg';
import squerrl from '../../asset/images/squerrl.jpg';
import parrot from '../../asset/images/parrot.jpg';
import {useAppSelector} from '../../hooks/hooks';
import {useAppDispatch} from '../../hooks/hooks';
import {fetchData} from '../../store/slices/dataSlice';

const HomeSide = ({navigation}: any) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData('donations'));
    // dispatch(getUserData(''));
  }, []);
  const userData: any = useAppSelector(state => state.user.userData);
  const allData: any = useAppSelector(state => state.data.allData);
  // console.log('data is', allData);

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
      Catagory: 'Cat',
      price: 30,
      image: cat,
    },
    {
      id: 2,
      name: 'Jack',
      age: 25,
      Catagory: 'Dog',
      price: 29,
      image: dog,
    },
    {
      id: 3,
      name: 'Peng',
      age: 25,
      Catagory: 'Bunny',
      price: 28,
      image: bunnies,
    },
    {
      id: 4,
      name: 'Fle',
      age: 25,
      Catagory: 'sparrow',
      price: 28,
      image: sparrow,
    },
    {
      id: 5,
      name: 'Dock',
      age: 25,
      Catagory: 'Turtle',
      price: 28,
      image: turtle,
    },
    {
      id: 6,
      name: 'Lofi',
      age: 4,
      Catagory: 'Squerrl',
      price: 28,
      image: squerrl,
    },
    {
      id: 7,
      name: 'Tota',
      age: 3,
      Catagory: 'Parrot',
      price: 28,
      image: parrot,
    },
    // Add more data as needed
  ]);
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.hambergerDiv}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Image source={hamberger} />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={{
              width: 56,
              height: 56,
              borderRadius: 123,
              backgroundColor: '#C4C4C4',
            }}
            source={userData && {uri: userData.image}}></Image>
        </View>
      </View>
      <View style={styles.headingDiv}>
        <Text style={styles.heading}>Find an Awesome Pets for You</Text>
      </View>
      <View style={styles.searchDiv}>
        <Search
          containerStyle={{
            marginTop: 10,
            marginBottom: 10,
            paddingHorizontal: 15,
            borderColor: 'transparent',
          }}
        />
      </View>
      <Text>Email {userData.email} </Text>
      <Text>Name {userData.userName} </Text>
      <Text>uid {userData.uid} </Text>
      <View>
        <FlatList
          horizontal
          style={styles.horizontalFlatlist}
          data={allData}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginHorizontal: 2,
              }}>
              <Image
                source={{uri: item.imageUrl}}
                style={styles.circularSuggestImage}
              />
              <Text>{item.selectedType}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text style={styles.forYouText}>For You</Text>
      </View>
      <View style={{flex: 1, marginVertical: 5}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.verticalFlatlist}
          data={allData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                marginBottom: 20,
              }}>
              <ImageBackground
                source={{uri: item.imageUrl}}
                style={styles.imageBackground}
                resizeMode="cover" // added resizeMode
              >
                <View style={styles.cardText}>
                  <Text style={styles.cardTextName}>{item.selectedType}</Text>
                  <Text style={styles.cardTextCatagory}>{item.breed}</Text>
                  <Text style={styles.cardTextAge}>Age {item.age}</Text>
                  <Text style={styles.cardTextPrice}>$ {item.amount}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default HomeSide;

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    borderWidth: 0,
    borderColor: 'transparent',
    flex: 1,
  },
  header: {
    borderWidth: 2,
    borderColor: 'transparent',
    marginVertical: 10,
    // display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 15,
  },
  hambergerDiv: {
    // height:50,
    // width:50,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 50,
  },
  headingDiv: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    marginHorizontal: 15,
  },
  heading: {
    fontSize: 36,
    fontFamily: 'MontserratExtraBold',
    lineHeight: 43.88,
  },
  searchDiv: {},
  horizontalFlatlist: {
    width: '100%',
    borderWidth: 0,
    borderColor: 'transparent',
    height: 110,
  },
  circularSuggestImage: {
    height: 72,
    width: 72,
    borderRadius: 50,
  },
  forYouText: {
    fontSize: 18,
    lineHeight: 21.94,
    fontFamily: 'MontserratBold',
    marginLeft: 16,
  },
  verticalFlatlist: {
    borderWidth: 0,
    borderColor: 'transparent',
  },

  imageBackground: {
    height: 180,
    width: 321,
    resizeMode: 'cover',
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between'
  },
  cardText: {
    borderWidth: 0,
    borderColor: 'transparent',
    width: '70%',
    marginLeft: 20,
  },
  cardTextName: {
    fontSize: 29,
    lineHeight: 35.35,
    color: '#FFFFFF',
    fontFamily: 'MontserratExtraBold',
  },
  cardTextCatagory: {
    fontSize: 29,
    lineHeight: 35.35,
    color: '#FFFFFF',
    fontFamily: 'MontserratExtraBold',
  },
  cardTextAge: {
    fontSize: 14,
    lineHeight: 17.07,
    color: '#FFFFFF',
    fontFamily: 'MontserratSemiBold',
  },
  cardTextPrice: {
    fontSize: 25,
    lineHeight: 30.48,
    color: '#101C1D',
    fontFamily: 'MontserratExtraBold',
  },
});
