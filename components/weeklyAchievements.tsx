import React from "react";
import { View, Image, ScrollView } from "react-native";
import tw from "twrnc";

export default function WeeklyAchievements() {
	// Sample data:
	const totalSteps = 8712;
	const totalDistance = 14.1; // km
	const achievementStreak = 5;
	const prevLevel = 17;
	const currentLevel = 18;

	// Function to determine available achievements:
	const availableAchievements = (): { [key: string]: any } => {
		const achievements: { [key: string]: any } = {};
		if (totalSteps >= 7000) {
			achievements["7k steps"] = require("../assets/medals/7ksteps.png");
		}
		// if (totalSteps >= 10000) {
		// 	achievements["10k steps"] = require("../assets/medals/10ksteps.png");
		// }
		if (totalDistance >= 5) {
			achievements["5km distance"] = require("../assets/medals/5kmdistance.png");
		}
		// if (totalDistance >= 10) {
		// 	achievements["10km distance"] = require("../assets/medals/10km.png");
		// }
		if (achievementStreak >= 5) {
			achievements["5 day streak"] = require("../assets/medals/5kmdistance.png");
		}
		if (prevLevel < currentLevel) {
			achievements["Level Up"] = require("../assets/medals/level18.png");
		}

		return achievements;
	};

	const achievements = availableAchievements();

	return (
		<View>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				{Object.entries(achievements).map(([key, imgSource], index) => (
					<View key={index} style={tw`flex-row items-center mb-4 w-[6rem] mr-3 justify-center`}>
						<View
							style={{
								...tw`absolute inset-0 bg-white`,
								opacity: 0.1,
								borderRadius: 8,
							}}
						/>
						<Image source={imgSource} style={tw`w-20 h-20`} resizeMode="contain" />
					</View>
				))}
			</ScrollView>
		</View>
	);
}
