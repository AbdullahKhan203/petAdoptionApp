// import React, { useState } from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {Image, TouchableOpacity, FlatList} from 'react-native';
// import cat from '../../assets/images/cat.jpg';

// // const Home = ({ data }: { data: Animal }) => {
// const Home = ({data}) => {
//   // const [products,setProducts]=useState()
//   // const getData=()=>{
//   //   fetch('https://fakestoreapi.com/products')
//   //   .then(res=>res.json())
//   //   .then(json=>{
//   //     console.log(json);
//   //     setProducts(json)
//   //   })
//   // }
// console.log(data);

//   return (
//     <View>
//       <View style={style.headingDiv}>
//         <Text style={style.mainHeading}>Find an Awesome Pets for You</Text>
//       </View>
//       <View style={style.horizontalScrollbar}>
//             {/* <Text>{data}</Text> */}
//             <FlatList data={data}
//              />
//       </View>

//     </View>
//   );
// };

// export default Home;

// const style = StyleSheet.create({
//   headingDiv: {
//     width: 300,
//     height: 150,
//     borderColor: 'red',
//     marginLeft: 23,
//     borderWidth: 1,
//   },
//   mainHeading: {
//     fontSize: 36,
//     lineHeight: 43.88,
//     fontFamily: 'Montserrat-ExtraBold',
//   },
//   horizontalScrollbar:{

//   }

// });
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

interface DataItem {
  id: string;
  type: string;
  image: any; // Adjust this type as per your specific requirements
}

const Home = ({data}: {data: DataItem[]}) => {
  return (
    <View>
      <View style={styles.headingDiv}>
        <Text style={styles.mainHeading}>Find an Awesome Pets for You</Text>
      </View>
      <View style={styles.horizontalScrollbar}>
        <FlatList
          horizontal
          data={data}
          style={styles.flatListCatagory}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.catagoryButton}>
                {/* <TouchableOpacity style={styles.catagoryButton}> */}
                <Image source={item.image} style={styles.catagoryImage} />
                <Text style={styles.catagoryName}>{item.type}</Text>
                {/* // </TouchableOpacity> */}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.suggesitionDivMain}>
        <Text style={styles.forYou}>For You</Text>
        {/* <View style={styles.suggesitionsImageDiv}>
            </View> */}
       
        <FlatList
        keyExtractor={(item) => item.id.toString()}
 
          data={data}
           style={styles.flatListSuggesitions}
          renderItem={({item}) => (
             
              // console.log(item);
            
            <View  style={styles.suggesitionImageDiv}>
              <ImageBackground
                style={styles.suggesitionImage}
                source={item.image}
                resizeMode="cover"
              />
              {/* <Image source={item.image} style={styles.suggesitionImage} resizeMode={cover} /> */}
              {/* <Text>{item.id}</Text> */}
            </View>
          
          )}
          // keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headingDiv: {
    width: 300,
    height: 150,
    borderColor: 'red',
    marginLeft: 23,
    borderWidth: 1,
    // marginVertical:0,
  },
  mainHeading: {
    fontSize: 36,
    lineHeight: 43.88,
    fontFamily: 'Montserrat-ExtraBold',
  },
  horizontalScrollbar: {
    marginTop: 2,
    marginBottom: 2,
    // borderWidth:2,
    // borderColor:'red',
  },
  catagoryImage: {
    height: 72,
    width: 72,
    borderRadius: 50,
  },
  flatListCatagory: {
    // marginVertical:50,
    // borderWidth:2,
    // borderColor:'green',
    marginLeft: 18,
  },
  catagoryName: {
    // textAlign: center,
    fontSize: 14,
    lineHeight: 17.87,
    fontFamily: 'Montserrat-SemiBold',
  },
  catagoryButton: {
    marginVertical: 2,
    // borderWidth:2,
    // borderColor:'blue',
    // height:102,
    // width:72,
    display: 'flex',
    alignItems: 'center',
    padding: 2,
  },
  suggesitionDivMain: {
    marginTop: 10,
    borderWidth: 2,
    // paddingHorizontal:13,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  forYou: {
    // marginLeft:23,
    marginBottom: 5,
    fontSize: 18,
    lineHeight: 21.94,
    fontFamily: 'Montserrat-Bold',
    position: 'relative',
  },

  flatListSuggesitions: {
    borderWidth: 1,
    borderColor: 'orange',
    height:230,
  },
  suggesitionImageDiv: {
    height: 200,
    // position:'absolute',
    width: '100%',
    marginVertical: 5,
    backgroundColor: 'pink',

    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  suggesitionImage: {
    flex: 1,
  },

  // suggesitionImageDiv: {
  //   width: '100%',
  //   marginVertical: 10,
  //   backgroundColor: 'pink',
  //   borderColor: 'red',
  //   borderWidth: 1,
  //   borderRadius: 20,
  //   height:200,
  // },
  // suggesitionImage: {
  //   width: '100%',
  //   height: '100%', // Set image height to fill the parent view
  // },
  

  // catagoryButton:{

  // }
});
