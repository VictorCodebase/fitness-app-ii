import { defineTask } from "expo-task-manager"; // Correct import
import { Pedometer } from "expo-sensors";

// Define the background task to track steps
defineTask("BACKGROUND_STEP_TRACKING", async () => {
	try {
		const isAvailable = await Pedometer.isAvailableAsync();
		if (!isAvailable) {
			console.error("Pedometer is not available.");
			return;
		}

		// Get the step count for the past 24 hours (adjust this as necessary)
		const result = await Pedometer.getStepCountAsync(
			new Date(new Date().getTime() - 1000 * 60 * 60 * 24), // 24 hours ago
			new Date()
		);

		console.log(`Steps today: ${result.steps}`);

		// Optionally, save the result to AsyncStorage, or send it to your backend.
		// Example: AsyncStorage.setItem('stepsToday', result.steps.toString());
	} catch (error) {
		console.error("Error while tracking steps:", error);
	}
});
