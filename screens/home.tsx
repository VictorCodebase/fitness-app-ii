import React from "react";

import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useFontContext } from "../context/fontContext";
import { GlassMorphed } from "../constants/glassMorphed";

import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome5";

import TopPadding from "../components/topPadding";
import HomeBackground from "../components/homeBackground";
import TopBar from "../components/topBar";
import AnalysisChart from "../components/analysisChart";
import WeeklyAchievements from "../components/weeklyAchievements";

export default function Home() {
	const { fontsLoaded } = useFontContext();
	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading fonts...</Text>
			</View>
		);
	} else {
		console.log("Fonts loaded");
	}
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
							<View style={tw`w-[100%] flex flex-col justify-between py-1`}>
								<Text style={[tw`text-white mx-4`, { fontFamily: "Roboto-Bold", fontSize: 17 }]}>
									Distance increase: 46%
								</Text>
								<Text style={[tw`text-white mx-4`, { fontFamily: "Roboto-Light", fontSize: 15 }]}>
									Yesterday 2.8Km
								</Text>
							</View>
						</View>
						<View style={tw`flex flex-row h-[50px] justify-around mt-4`}>
							<View style={tw`w-[30%]`}>
								<View style={tw`flex flex-row`}>
									<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 28 }]}>4.9</Text>
									<Text style={[tw`text-gray-300`, { fontFamily: "Roboto-Light", fontSize: 13 }]}>
										km
									</Text>
								</View>
								<Text style={[tw`text-white tracking-wide`, { fontFamily: "Roboto-Light", fontSize: 10 }]}>
									Distance
								</Text>
							</View>
							<View style={tw`w-[30%]`}>
								<View style={tw`flex flex-row`}>
									<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 28 }]}>228</Text>
									<Text style={[tw`text-gray-300`, { fontFamily: "Roboto-Light", fontSize: 13 }]}>
										kcal
									</Text>
								</View>
								<Text style={[tw`text-white tracking-wide`, { fontFamily: "Roboto-Light", fontSize: 10 }]}>
									KiloCalories
								</Text>
							</View>
							<View style={tw`w-[30%]`}>
								<View style={tw`flex flex-row`}>
									<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 28 }]}>90</Text>
									<Text style={[tw`text-gray-300`, { fontFamily: "Roboto-Light", fontSize: 13 }]}>
										bpm
									</Text>
								</View>
								<Text style={[tw`text-white tracking-wide`, { fontFamily: "Roboto-Light", fontSize: 10 }]}>
									Avge heart rate
								</Text>
							</View>
						</View>
					</View>

					<Text style={[tw`text-white mt-[3rem] mb-3`, { fontFamily: "Roboto-Bold", fontSize: 17 }]}>Analysis</Text>
					<AnalysisChart />

					<Text style={[tw`text-white mt-[3rem] mb-3`, { fontFamily: "Roboto-Bold", fontSize: 17 }]}>Your weekly achievements</Text>
					<WeeklyAchievements />
				</ScrollView>
			</SafeAreaView>
		</>
	);
}
