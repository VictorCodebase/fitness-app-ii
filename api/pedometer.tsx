import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Pedometer } from "expo-sensors";

import tw from "twrnc";

const StepCounter = () => {
	const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
	const [stepCount, setStepCount] = useState(0);

	useEffect(() => {
		let subscription;

		const subscribe = async () => {
			const available = await Pedometer.isAvailableAsync();
			setIsPedometerAvailable(available);

			if (available) {
				console.log("Subscribing to pedometer");
				subscription = Pedometer.watchStepCount((result) => {
					console.log("Step count result:", result);
					setStepCount(result.steps);
				});
			}
		};

		subscribe();

		return () => {
			subscription && subscription.remove();
		};
	}, []);

	return (
		<View>
			<Text style={tw`text-white`}>{isPedometerAvailable ? `Steps taken: ${stepCount}` : "Pedometer not available on this device"}</Text>
		</View>
	);
};

export default StepCounter;
