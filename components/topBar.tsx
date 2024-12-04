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

	return (
		<View style={tw`relative h-20 w-[100%] p-1 m-auto flex-row justify-between items-center`}>
			<View>
				<Text style={[tw`text-white`, { fontFamily: "Roboto-Light", fontSize: 15 }]}>Good Morning, Group!</Text>
				<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 22 }]}>Ready To A Morning Run?</Text>
			</View>

			<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
				<Cog6ToothIcon style={tw`h-6 w-6 text-white`} />
			</TouchableOpacity>
		</View>
	);
};

export default TopBar;
