import React from "react";

import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Cog6ToothIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useFontContext } from "../context/fontContext";
import tw from "twrnc";

const TopBar = () => {
    const navigation = useNavigation();
    const { fontsLoaded } = useFontContext();
      if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading fonts...</Text>
			</View>
		);
      }

    function navigateToSettings () {
        console.log("Navigating to settings");
        navigation.navigate("Settings");
    }

	return (
		<View style={tw`relative h-20 w-[80%] m-auto flex-row justify-between items-center`}>
			<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 25 }]}>AI FITNESS</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
				<Cog6ToothIcon style={tw`h-6 w-6 text-white`} />
			</TouchableOpacity>
		</View>
	);
};

export default TopBar;
