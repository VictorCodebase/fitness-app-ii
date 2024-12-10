import React from "react";
import { View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr"],
	datasets: [
		{
			data: [20, 45, 28, 80],
		},
	],
};

export default function AnalysisChart() {
	return (
		<View>
			<BarChart
				data={data}
				width={screenWidth - 40}
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
					marginVertical: 8,
					borderRadius: 16,
					margin: "auto",
				}}
			/>
		</View>
	);
}
