import React, { useEffect } from "react";

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
import StepCounter from "../api/pedometer";
import {readActiveCaloriesBurned, readDistanceWalked, readElevationGained, readHeartRate} from "../api/health-api";

export default function Home() {
	const now = new Date();
	const t1 = new Date(now);
	t1.setDate(t1.getDate() - 6); // 6 days ago
	const past = t1.toISOString();

	const t2 = new Date(now);
	t2.setDate(t2.getDate() + 6); // 6 days into the future
	const future = t2.toISOString();

	const today = 6; // data starts from 6 days ago


	

	
	const { fontsLoaded } = useFontContext();
	const [caloriesBurned, setCaloriesBurned] = React.useState([]);
	const [elevationGained, setElevationGained] = React.useState<number[]>([]);
	const [distanceWalked, setDistanceWalked] = React.useState<number[]>([]);
	const [heartRate, setHeartRate] = React.useState<number[]>([]);

	const [rawDistanceWalked, setRawDistanceWalked] = React.useState<number[]>([]);
	const [rawElevationGained, setRawElevationGained] = React.useState<number[]>([]);
	const [rawHeartRate, setRawHeartRate] = React.useState<number[]>([]);
	const [rawCaloriesBurned, setRawCaloriesBurned] = React.useState<number[]>([]);


	useEffect(() => {
		const lastDayRead = (new Date(t2).getTime() - new Date(t1).getTime()) / (1000 * 60 * 60 * 24);
		console.log(lastDayRead);

		const getCaloriesBurned = async () => {
			const result = await readActiveCaloriesBurned(past, future);
			setRawCaloriesBurned(result);
			setCaloriesBurned(result[today]["value"]);
		};
		const getElevationGained = async () => {
			const result = await readElevationGained(past, future);
			setRawElevationGained(result);
			setElevationGained(result[today]["value"]);
		};
		const getHeartRate = async () => {
			const result = await readHeartRate(past, future);
			setRawHeartRate(result);
			setHeartRate(result[today]["value"]);
		};
		const getDistanceWalked = async () => {
			const result: { [key: string]: { value: number } } = await readDistanceWalked(past, future);
			setRawDistanceWalked(result);
			setDistanceWalked([result[today - 1]["value"], result[today]["value"]]);
		}

		getCaloriesBurned();
		getElevationGained();
		getHeartRate();
		getDistanceWalked();
	}, []);

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
									{distanceWalked[1] > distanceWalked[0] ? (
										<Text>
											Distance Increase{" "}
											{(
												((distanceWalked[1] - distanceWalked[0]) / distanceWalked[0]) *
												100
											).toFixed(2)}
											%
										</Text>
									) : (
										<Text>
											Distance Decrease{" "}
											{(
												((distanceWalked[0] - distanceWalked[1]) / distanceWalked[0]) *
												100
											).toFixed(2)}
											%
										</Text>
									)}
								</Text>
								<Text style={[tw`text-white mx-4`, { fontFamily: "Roboto-Light", fontSize: 15 }]}>
									Yesterday {distanceWalked[0]}km
								</Text>
							</View>
						</View>
						<View style={tw`flex flex-row h-[50px] justify-around mt-4`}>
							<View style={tw`w-[30%]`}>
								<View style={tw`flex flex-row`}>
									<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 28 }]}>
										{distanceWalked[1] ?? 0}
									</Text>
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
									<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 28 }]}>
										{caloriesBurned ?? 0}
									</Text>
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
									<Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 28 }]}>
										{heartRate ?? 0}
									</Text>
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

					<Text style={[tw`text-white mt-[3rem] mb-3`, { fontFamily: "Roboto-Bold", fontSize: 17 }]}>Weekly achievements</Text>
					<WeeklyAchievements />

					<Text style={[tw`text-white mb-3`, { fontFamily: "Roboto-Bold", fontSize: 17 }]}>Analysis</Text>
					<AnalysisChart rawCaloriesBurned={rawCaloriesBurned} rawHeartRate={rawHeartRate}/>
					<StepCounter />
				</ScrollView>
			</SafeAreaView>
		</>
	);
}
