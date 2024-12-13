import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import * as ImagePicker from "expo-image-picker"; // Commented out since you're not working on it yet
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

// TypeScript interface for the user profile data
interface UserProfile {
  name: string;
  age: string;
  mydistance: string;
  gender: string;
  email: string;
  password: string;
  profileImage: string | null;
}

const UserProfile = () => {
  const navigation = useNavigation();
  
  // Initial state for user profile
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    age: "",
    mydistance: "",
    gender: "",
    email: "",
    password: "",
    profileImage: null
  });

  // Handle profile image selection (commented out for now)
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [1, 1],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     setUserProfile({ ...userProfile, profileImage: result.uri });
  //   }
  // };

  // Handle input changes for form fields
  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setUserProfile({ ...userProfile, [field]: value });
  };

  // Handle save button click (you could implement actual saving logic here)
  const handleSave = () => {
    // Implement save logic, like storing in AsyncStorage or a backend
    alert("Profile Saved!");
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      {/* Commented out the image-related code */}
      {/* <View style={tw`items-center mb-6`}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={userProfile.profileImage ? { uri: userProfile.profileImage } : require("../assets/defaultProfile.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View> */}

      <Text style={tw`text-xl font-bold text-center mb-4`}>User Profile</Text>

      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-4`}
        placeholder="Full Name"
        value={userProfile.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />

      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-4`}
        placeholder="Age"
        value={userProfile.age}
        onChangeText={(value) => handleInputChange("birthday", value)}
      />

      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-4`}
        placeholder="MyDistance"
        value={userProfile.mydistance}
        onChangeText={(value) => handleInputChange("phone", value)}
      />

      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-4`}
        placeholder="Gender"
        value={userProfile.gender}
        onChangeText={(value) => handleInputChange("instagram", value)}
      />

      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-4`}
        placeholder="Email"
        value={userProfile.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />

      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-6`}
        placeholder="Password"
        secureTextEntry
        value={userProfile.password}
        onChangeText={(value) => handleInputChange("password", value)}
      />

      <TouchableOpacity onPress={handleSave} style={tw`bg-purple-500 p-3 rounded-lg`}>
        <Text style={tw`text-white text-center font-bold`}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the profile image (commented out for now)
const styles = StyleSheet.create({
  // profileImage: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   borderWidth: 2,
  //   borderColor: "#ccc",
  // },
});

export default UserProfile;
