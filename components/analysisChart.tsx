import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import tw from "twrnc";


const screenWidth = Dimensions.get("window").width;

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr"],
	datasets: [
		{
			data: [20, 45, 28, 80],
		},
	],
};

const chartData = {
	labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
	datasets: [
		{
			data: [30, 60, 45, 80],
			color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
			strokeWidth: 2, // optional
		},
	],
};

export default function AnalysisChart() {
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
			<View>
				<BarChart
					data={data}
					width={screenWidth - 32}
					height={220}
					yAxisLabel=""
					yAxisSuffix=""
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
					data={chartData}
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
