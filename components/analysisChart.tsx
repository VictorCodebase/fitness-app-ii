// analysisChart.tsx
import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import tw from "twrnc";
import { readActiveCaloriesBurned } from "../api/health-api";


const screenWidth = Dimensions.get("window").width;

const now = new Date();
const t1 = new Date(now);
t1.setDate(t1.getDate() - 6); // 6 days ago
const past = t1.toISOString();

const t2 = new Date(now);
t2.setDate(t2.getDate() + 6); // 6 days into the future
const future = t2.toISOString();

const distanceData = async () => {
	const result = await readActiveCaloriesBurned(past, future);
	return result;
}
const distance = distanceData();

async function caloriesData() {
	const result = await readActiveCaloriesBurned(past, future);
	console.log("result",result);
	return result;
}



const data = {
	labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
	datasets: [
		{
			data: [20, 45, 28, 80, 30, 60, 90],
		},
	],
};

const chartData = {
	labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
	datasets: [
		{
			data: [30, 60, 45, 80],
			color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
			strokeWidth: 2, // optional
		},
	],
};

const today = new Date();
const sixDaysAgo = new Date();
sixDaysAgo.setDate(today.getDate() - 6);

export default function AnalysisChart({ rawCaloriesBurned, rawHeartRate }) {
	console.log("raw cal", rawCaloriesBurned);
	const filteredCalories = rawCaloriesBurned.filter((entry) => {
		const entryDate = new Date(entry.date);
		return entryDate >= sixDaysAgo && entryDate <= today;
	});
	const filteredHeartRate = rawHeartRate.filter((entry) => {
		const entryDate = new Date(entry.date);
		return entryDate >= sixDaysAgo && entryDate <= today;
	});

	const caloriesData = {
		labels: filteredCalories.map((entry) => {
			const date = new Date(entry.date);
			return date.toLocaleString("en-US", { weekday: "short" }); // Convert to short weekday name
		}),
		datasets: [
			{
				data: filteredCalories.map((entry) => entry.value),
			},
		],
	};

	const heartRateData = {
		labels: filteredHeartRate.map((entry) => {
			const date = new Date(entry.date);
			// Format date as a day label (e.g., Mon, Tue, etc.)
			return date.toLocaleString("en-US", { weekday: "short" });
		}),
		datasets: [
			{
				data: filteredHeartRate.map((entry) => entry.value),
			},
		],
	};

	console.log("filtered cal", filteredCalories);
	console.log("calories data", caloriesData);
	console.log("heart rate data", heartRateData);
	console.log("data", data)


	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			<View>
				<BarChart
					data={caloriesData}
					width={screenWidth - 52}
					height={220}
					yAxisLabel=""
					yAxisSuffix=" Steps"
					chartConfig={{
						backgroundColor: "#ffffff",
						backgroundGradientFrom: "#465C87",
						backgroundGradientTo: "#200059",
						decimalPlaces: 0,
						color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
						style: {
							borderRadius: 16,
						},
					}}
					style={{
						marginTop: 16,
						marginVertical: 8,
						borderRadius: 16,
						marginRight: 30,
					}}
				/>
			</View>
			<View>
				<LineChart
					data={heartRateData}
					width={screenWidth - 32} // Adjust based on your screen size
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
						marginLeft: 20,
					}}
				/>
			</View>
		</ScrollView>
	);
}
