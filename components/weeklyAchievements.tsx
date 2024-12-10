import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import tw from "twrnc";

export default function WeeklyAchievements() {
	// Sample data:
	const totalSteps = 8712;
	const totalDistance = 14.1; // km
	const achievementStreak = 5;
	const prevLevel = 17;
	const currentLevel = 18;

	// Function to determine available achievements:
	const availableAchievements = () => {
		const achievements: { [key: string]: string[] } = {};
		if (totalSteps >= 7000) {
			achievements["7k steps"] = ["./assets/medals/7ksteps.png"];
		}
		if (totalSteps >= 10000) {
			achievements["10k steps"] = ["./assets/medals/10ksteps.png"];
		}
		if (totalDistance >= 5) {
			achievements["5km distance"] = ["./assets/medals/5km.png"];
		}
		if (totalDistance >= 10) {
			achievements["10km distance"] = ["./assets/medals/10km.png"];
		}
		if (achievementStreak >= 5) {
			achievements["5 day streak"] = ["./assets/medals/5daystreak.png"];
		}
		if (prevLevel < currentLevel) {
			achievements["Level Up"] = ["./assets/medals/levelup.png"];
		}

		return achievements;
	};

	const achievements = availableAchievements();

	return (
		<SafeAreaView style={tw`p-4`}>
			<View style={tw`w-min-w-max`}>
				{Object.entries(achievements).map(([key, value], index) => (
					<View key={index} style={tw`flex-row items-center mb-4`}>
						<Text style={tw`text-lg font-bold mr-2`}>{key}</Text>
						<Image source={{ uri: value[0] }} style={tw`w-10 h-10`} resizeMode="contain" />
					</View>
				))}
			</View>
		</SafeAreaView>
	);
}
