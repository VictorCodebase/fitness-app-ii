import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HomeIcon, UsersIcon, ChartBarIcon, UserIcon } from "react-native-heroicons/outline";
import tw from "twrnc";

const BottomBar = () => {
  const navigation = useNavigation();
  const route = useRoute();  // Get current route name

  // Highlighted icon style
  const activeStyle = tw`text-green-500`;  // Highlighted color
  const defaultStyle = tw`text-gray-500`; // Default color

  return (
    <View style={tw`absolute bottom-0 w-full h-16 bg-black flex-row justify-around items-center`}>
      <TouchableOpacity
        style={tw`flex-1 justify-center items-center`}
        onPress={() => navigation.navigate("Home")}
      >
        <HomeIcon style={route.name === "Home" ? activeStyle : defaultStyle} />
        <Text style={tw`text-white text-xs`}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-1 justify-center items-center`}
        onPress={() => navigation.navigate("Community")}
      >
        <UsersIcon style={route.name === "Community" ? activeStyle : defaultStyle} />
        <Text style={tw`text-white text-xs`}>Community</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-1 justify-center items-center`}
        onPress={() => navigation.navigate("Activity")}
      >
        <ChartBarIcon style={route.name === "Activity" ? activeStyle : defaultStyle} />
        <Text style={tw`text-white text-xs`}>Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-1 justify-center items-center`}
        onPress={() => navigation.navigate("UserProfile")}
      >
        <UserIcon style={route.name === "Profile" ? activeStyle : defaultStyle} />
        <Text style={tw`text-white text-xs`}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
