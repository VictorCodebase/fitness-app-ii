import React, { useState } from "react";
import { View, Text, TextInput, Switch, TouchableOpacity } from "react-native";
import tw from "twrnc";
import TopPadding from "../components/topPadding";

const SettingsScreen = () => {
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [shareStats, setShareStats] = useState(false);

	const handleSave = () => {
		// Handle save logic here
		console.log({ height, weight, shareStats });
	};

	return (
		<View style={tw`flex-1 bg-white p-4`}>
			<TopPadding />
			<Text style={tw`text-2xl font-bold mb-6`}>Settings</Text>

			{/* Height Input */}
			<View style={tw`mb-4`}>
				<Text style={tw`text-lg mb-2`}>Height (cm)</Text>
				<TextInput
					style={tw`border border-gray-300 rounded-lg p-3 text-lg`}
					value={height}
					onChangeText={setHeight}
					keyboardType="numeric"
					placeholder="Enter height"
				/>
			</View>

			{/* Weight Input */}
			<View style={tw`mb-4`}>
				<Text style={tw`text-lg mb-2`}>Weight (kg)</Text>
				<TextInput
					style={tw`border border-gray-300 rounded-lg p-3 text-lg`}
					value={weight}
					onChangeText={setWeight}
					keyboardType="numeric"
					placeholder="Enter weight"
				/>
			</View>

			{/* Share Stats Switch */}
			<View style={tw`flex-row items-center justify-between mb-6`}>
				<Text style={tw`text-lg`}>Share Stats</Text>
				<Switch
					value={shareStats}
					onValueChange={setShareStats}
					trackColor={{ true: "#6200ee", false: "#ccc" }}
					thumbColor={shareStats ? "#6200ee" : "#f4f3f4"}
				/>
			</View>

			{/* Save Button */}
			<TouchableOpacity onPress={handleSave} style={tw`bg-purple-600 rounded-lg py-3`}>
				<Text style={tw`text-white text-center text-lg`}>Save</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SettingsScreen;
