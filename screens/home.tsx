import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { GlassMorphed } from "../constants/glassMorphed";
import { LineChart } from "react-native-chart-kit";

import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome5";

import TopPadding from "../components/topPadding";
import HomeBackground from "../components/homeBackground";
import TopBar from "../components/topBar";

export default function Home() {
	// State variables for dynamic values
	const [distance, setDistance] = useState(4.9); // Distance in KM
	const [calories, setCalories] = useState(228); // Calories in KCal
	const [steps, setSteps] = useState(6543); // Number of steps
	const [yesterdayDistance, setYesterdayDistance] = useState(2.8); // Yesterday's distance

	const [chartData, setChartData] = useState({
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				data: [3, 4.5, 2.8, 4, 4.9, 3.5, 5], // Weekly activity data
				color: (opacity = 1) => `rgba(255, 173, 96, ${opacity})`, // Line color
				strokeWidth: 2, // Line thickness
			},
		],
	});

	return (
		<>
			<HomeBackground />
			<SafeAreaView style={tw`px-4`}>
				<ScrollView>
					<TopPadding />
					<TopBar />

					{/* Statistics Section */}
					<View style={[GlassMorphed.fullWidth, tw`p-4 mt-4 rounded-lg bg-[#1F1F1F]`]}>
						<View style={tw`flex flex-row items-center mb-4`}>
							<View
								style={tw`w-[60px] h-[60px] bg-[#D7FD50] flex items-center justify-center rounded-lg`}
							>
								<Icon name="running" size={24} color="#200049" />
							</View>
							<View style={tw`ml-4`}>
								<Text style={[tw`text-white font-bold`, { fontSize: 18 }]}>
									Distance Increase 46%
								</Text>
								<Text style={[tw`text-gray-400`, { fontSize: 14 }]}>
									Yesterday: {yesterdayDistance} KM
								</Text>
							</View>
						</View>

						<View style={tw`flex flex-row justify-between`}>
							<View style={tw`flex items-center`}>
								<Text style={[tw`text-white font-bold`, { fontSize: 20 }]}>
									{distance}
								</Text>
								<Text style={[tw`text-gray-400`, { fontSize: 12 }]}>KM</Text>
								<Text style={[tw`text-white`, { fontSize: 12 }]}>Distance</Text>
							</View>
							<View style={tw`flex items-center`}>
								<Text style={[tw`text-white font-bold`, { fontSize: 20 }]}>
									{calories}
								</Text>
								<Text style={[tw`text-gray-400`, { fontSize: 12 }]}>KCAL</Text>
								<Text style={[tw`text-white`, { fontSize: 12 }]}>Kilocalorie</Text>
							</View>
							<View style={tw`flex items-center`}>
								<Text style={[tw`text-white font-bold`, { fontSize: 20 }]}>
									{steps}
								</Text>
								<Text style={[tw`text-gray-400`, { fontSize: 12 }]}>Steps</Text>
								<Text style={[tw`text-white`, { fontSize: 12 }]}>Total Steps</Text>
							</View>
						</View>
					</View>

					{/* Graph Section */}
					<View style={[tw`mt-6 p-4 bg-[#1F1F1F] rounded-lg`]}>
						<Text style={[tw`text-white font-bold`, { fontSize: 18 }]}>
							Weekly Activity
						</Text>
						<LineChart
							data={chartData}
							width={340} // Adjust based on your screen size
							height={220}
							chartConfig={{
								backgroundColor: "#1F1F1F",
								backgroundGradientFrom: "#1F1F1F",
								backgroundGradientTo: "#1F1F1F",
								decimalPlaces: 1,
								color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
								style: {
									borderRadius: 16,
								},
								propsForDots: {
									r: "4",
									strokeWidth: "2",
									stroke: "#D7FD50",
								},
							}}
							style={{
								marginTop: 16,
								borderRadius: 16,
							}}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}
