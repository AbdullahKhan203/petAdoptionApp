import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useRef, useState } from "react";
import { dropDown } from "../../asset/dropDown.png";
import { bigDropDown } from "../../asset/bigDropDown.png";
import {} from "react-native-gesture-handler";
import imagePickerIcon from "../../asset/imagePickerIcon.png";
import goBackIcon from "../../asset/goBack.png";

const types = [
  { id: 1, type: "Dog" },
  { id: 2, type: "Cat" },
  { id: 3, type: "Bird" },
  { id: 4, type: "Rabbit" },
  { id: 5, type: "Hamster" },
  { id: 6, type: "Guinea Pig" },
  { id: 7, type: "Fish" },
  { id: 8, type: "Turtle" },
  { id: 9, type: "Parrot" },
  { id: 10, type: "Snake" },
  { id: 11, type: "Ferret" },
  { id: 12, type: "Horse" },
  { id: 13, type: "Rat" },
  { id: 14, type: "Mouse" },
  { id: 15, type: "Lizard" },
  { id: 16, type: "Gerbil" },
  { id: 17, type: "Chinchilla" },
  { id: 18, type: "Hedgehog" },
  { id: 19, type: "Sugar Glider" },
  { id: 20, type: "Potbellied Pig" },
];
const vaccine = [
  { id: 1, status: "yes" },
  { id: 2, status: "no" },
];
const genders = [
  { id: 1, gender: "Male" },
  { id: 2, gender: "FeMale" },
  { id: 3, gender: "Other" },
];

const DonateData = () => {
  const [selectedType, setSelectedType] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [type, setType] = useState(types);
  const [amount, setAmount] = useState("$  ");
  // vaccinated hooks
  const [selectedVaccineStatusType, setSelectedVaccineStatusType] =
    useState("");
  const [isVaccinatedClicked, setIsVaccinatedClicked] = useState(false);
  // gender hooks
  const [selectedGenderStatusType, setSelectedGenderStatusType] = useState("");
  const [genderClicked, setGenderClicked] = useState(false);

  const searchRef = useRef();

  const onSearch = (txt: any) => {
    if (txt !== "") {
      let tempData = type.filter((item) => {
        return item.type.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setType(tempData);
    } else {
      setType(types);
    }
  };
  console.log(selectedType);
  const handleAmountChange = (text: any) => {
    // Check if the input starts with '$' sign
    if (!text.startsWith("$")) {
      text = "$  " + text; // Prepend '$' sign and two spaces
    }
    setAmount(text); // Set the updated value
  };
  console.log(selectedVaccineStatusType);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <TouchableOpacity>
            {/* <Image src={dropDown} /> */}
            <Image source={goBackIcon} style={{marginLeft:15}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.typeDiv}>
          <Text>Pet Type</Text>
          <TouchableOpacity
            style={styles.typeSelector}
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text>{selectedType}</Text>
            <Image
              source={require("../../asset/bigDropDown.png")}
              style={{
                height: 20,
                width: 20,
                // backgroundColor: "pink",
                marginLeft: "auto",
              }}
            />
          </TouchableOpacity>
        </View>
        {isClicked ? (
          <View style={styles.dropdownArea}>
            {/* <Text>Hello World</Text> */}
            <TextInput
              ref={searchRef}
              placeholder="search pet"
              style={styles.searchType}
              onChangeText={(txt) => {
                onSearch(txt);
              }}
            />
            <FlatList
              data={type}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.typeItem}
                    onPress={() => {
                      setSelectedType(item.type);
                      onSearch("");
                      setIsClicked(false);
                      searchRef.current.clear();
                    }}
                  >
                    <Text>{item.type}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}

        <View style={styles.breedDiv}>
          <Text>Pet Breed</Text>
        </View>
        {/* amount Div start */}
        <View style={styles.amountDiv}>
          <Text>Amount</Text>
          <TextInput
            // style={styles.input}
            keyboardType="numeric"
            onChangeText={handleAmountChange}
            value={amount}
            // editable={false}
          />
        </View>
        {/* amount Div end */}
        <View style={styles.vaccineDiv}>
          <Text>Vaccinated</Text>
          <TouchableOpacity
            style={styles.vaccineStatusSelector}
            onPress={() => {
              setIsVaccinatedClicked(!isVaccinatedClicked);
            }}
          >
            <Text>{selectedVaccineStatusType}</Text>
            <Image
              source={require("../../asset/bigDropDown.png")}
              style={{
                height: 20,
                width: 20,
                // backgroundColor: "pink",
                marginLeft: "auto",
              }}
            />
          </TouchableOpacity>
        </View>
        {isVaccinatedClicked ? (
          <View style={styles.dropdownVaccineArea}>
            {/* <Text>Hello World</Text> */}

            <FlatList
              data={vaccine}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.typeItem}
                    onPress={() => {
                      setSelectedVaccineStatusType(item.status);
                      // onSearch("");
                      setIsVaccinatedClicked(false);
                    }}
                  >
                    <Text>{item.status}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        {/* genderr div start */}
        <View style={styles.genderDiv}>
          <Text>Gender</Text>
          <TouchableOpacity
            style={styles.vaccineStatusSelector}
            onPress={() => {
              setGenderClicked(!genderClicked);
            }}
          >
            <Text>{selectedGenderStatusType}</Text>
            <Image
              source={require("../../asset/bigDropDown.png")}
              style={{
                height: 20,
                width: 20,
                // backgroundColor: "pink",
                marginLeft: "auto",
              }}
            />
          </TouchableOpacity>
        </View>
        {genderClicked ? (
          <View style={styles.dropdownGenderArea}>
            {/* <Text>Hello World</Text> */}

            <FlatList
              data={genders}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.typeItem}
                    onPress={() => {
                      setSelectedGenderStatusType(item.gender);
                      // onSearch("");
                      setGenderClicked(false);
                    }}
                  >
                    <Text>{item.gender}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        ) : null}
        {/* genderr div end */}
        {/* weightDiv start */}
        <View style={styles.weightDiv}>
          <Text>Weight</Text>
          <TextInput
            // style={styles.input}
            keyboardType="numeric"
            // onChangeText={}
            // value={amount}
            // editable={false}
          />
        </View>
        {/* weightDiv  end*/}
        {/* LocationDiv start */}
        <View style={styles.weightDiv}>
          <Text>Location</Text>
          <TextInput
            // style={styles.input}
            keyboardType="numeric"
            // onChangeText={}
            // value={amount}
            // editable={false}
          />
        </View>
        {/* LocationDiv end */}
        {/* DescriptionDiv STARt */}
        <View style={styles.descriptionDiv}>
          <Text>Description:</Text>
          <TextInput
            // style={styles.des}
            keyboardType="default"
            // onChangeText={}
            // value={description}
          />
        </View>
        {/* DescriptionDiv end */}
        {/* Image picker div start */}
        <View style={styles.imagePickerDiv}>
          <Text>Image:</Text>
          <TouchableOpacity>
            <View style={styles.imagePicker}>
              <Image
                source={imagePickerIcon}
                style={{ height: 40, width: 40 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Image picker div end */}
        {/* Donate button start */}
        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.donateButtonText}>Donate</Text>
        </TouchableOpacity>
        {/* Donate button end */}
      </View>
    </ScrollView>
  );
};

export default DonateData;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    // flex: 1,
    height: "100%",
    width: "100%",
    // borderWidth: 1,
    borderColor: "green",
    marginTop: 10,
    alignItems: "center",
  },
  heading: {
    // height: "4%",
    width: "100%",
    // backgroundColor: "red",
    marginTop: 5,
  },
  typeDiv: {
    width: "90%",
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 50,
  },

  typeSelector: {
    paddingHorizontal: 10,

    // backgroundColor:'green',
    marginHorizontal: "auto",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  dropdownArea: {
    width: "90%",
    height: 300,
    borderRadius: 10,
    marginTop: 2,
    backgroundColor: "white",
    elevation: 5,
  },
  searchType: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  typeItem: {
    width: "80%",
    height: 50,
    borderBottomColor: "#*e8e8e",
    borderBottomWidth: 0.3,
    alignSelf: "center",
    justifyContent: "center",
  },
  breedDiv: {
    height: 50,
    width: "90%",
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  amountDiv: {
    height: 50,
    width: "90%",
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  vaccineDiv: {
    width: "90%",
    height: 50,
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  vaccineStatusSelector: {
    paddingHorizontal: 10,

    // backgroundColor:'green',
    marginHorizontal: "auto",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  vaccineItem: {
    width: "80%",
    height: 50,
    borderBottomColor: "#*e8e8e",
    borderBottomWidth: 0.3,
    alignSelf: "center",
    justifyContent: "center",
  },
  dropdownVaccineArea: {
    width: "90%",
    height: 100,
    borderRadius: 10,
    marginTop: 2,
    backgroundColor: "white",
    elevation: 5,
  },
  genderItem: {
    width: "80%",
    height: 60,
    borderBottomColor: "#*e8e8e",
    borderBottomWidth: 0.3,
    alignSelf: "center",
    justifyContent: "center",
  },
  // vaccineDiv: {
  //   width: "90%",
  //   height: 50,
  //   marginTop: 10,
  //   borderBottomColor: "black",
  //   borderBottomWidth: 1,
  // },
  genderDiv: {
    width: "90%",
    height: 50,
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  dropdownGenderArea: {
    width: "90%",
    height: 150,
    borderRadius: 10,
    marginTop: 2,
    backgroundColor: "white",
    elevation: 5,
  },
  weightDiv: {
    height: 50,
    width: "90%",
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  descriptionDiv: {
    height: 50,
    width: "90%",
    marginTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  imagePickerDiv: {
    // height: 150,
    width: "90%",
    marginTop: 10,
    

    // borderBottomColor: "black",
    // borderBottomWidth: 1,
  },
  imagePicker: {
    marginTop: 10,
    height: 160,
    borderRadius: 20,
    // width: 300,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  donateButton: {
    marginTop:20,
    height: 74,
    width: "90%",
    backgroundColor: "#101c1d",
    borderRadius:34,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 10,
  },
  donateButtonText:{
    color:'#FFFFFF',
    fontSize:20,
    lineHeight:24.38,
  }

  // genderDiv:{
  //   width: "90%",
  //   height: 50,
  //   marginTop: 10,
  //   borderBottomColor: "black",
  //   borderBottomWidth: 1,

  // }
});

// const data = [
//   {label: 'Dog', value: 'Dog'},
//   {label: 'Cat', value: 'Cat'},
//   {label: 'Rabbit ', value: 'Rabbit '},
//   {label: 'Horse', value: 'Horse'},
//   {label: 'Cavachon dog', value: 'Cavachon dog'},
// ];
// const vaccinatedData = [
//   {label: 'Yes', value: 'Yes'},
//   {label: 'No', value: 'No'},
// ];
// const genderList = [
//   {label: 'Male', value: 'Male'},
//   {label: 'Female', value: 'Female'},
// ];

//   <View style={styles.containerDropDown}>
//             <Text style={styles.label}>Pet Type</Text>
//             <Dropdown
//               data={data}
//               maxHeight={300}
//               labelField="label"
//               valueField="value"
//               placeholder=""
//               value={state.petType}
//               onChange={item => {
//                 handleChange('petType', item?.value);
//               }}
//             />
//           </View>
