import React from "react";

import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useFontContext } from "../context/fontContext";
import { GlassMorphed } from "../constants/glassMorphed";

import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome5";

import TopPadding from "../components/topPadding";
import HomeBackground from "../components/homeBackground";
import TopBar from "../components/topBar";

export default function Home() {
	const { fontsLoaded } = useFontContext();
	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading fonts...</Text>
			</View>
		);
	}else{console.log("Fonts loaded");}
	return (
		<>
			<HomeBackground />
			<SafeAreaView style={tw`px-4`}>
				<ScrollView>
					<TopPadding />
					<TopBar />
					<View style={GlassMorphed.fullWidth}>
						<View style={tw`flex flex-row h-[50px]`}>
							<View style={tw`w-50px h-50px bg-[#D7FD50] flex items-center justify-center rounded-lg`}>
								<View style={tw`w-[40px] h-[40px] bg-[#200049] rounded-full flex items-center justify-center`}>
									<Icon name="walking" size={20} color="white" style={tw`m-2`} />
								</View>
							</View>
							<View style={tw`w-[100%] flex flex-col justify-between`}>
								<Text style={[tw`text-white mx-4 font-bold`, { fontFamily: "Roboto-bold", fontSize: 20 }]}>
									Distance increase: 46%
								</Text>
								<Text style={[tw`text-white mx-4`, { fontFamily: "Roboto-light", fontSize: 15 }]}>
									Testerday 2.8Km
								</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}
