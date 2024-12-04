import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";

const BACKGROUND_STEP_TASK = "BACKGROUND_STEP_TRACKING"; // Task name should match

// Define the background task
export const registerBackgroundTask = () => {
    console.log("registering task");
	TaskManager.defineTask(BACKGROUND_STEP_TASK, async () => {
        console.log("defining task");
		try {
			// Task logic for fetching steps (you can replace with actual logic)
			console.log("Running background task...");
			const steps = await fetchSteps();

			// Indicate success
			return BackgroundFetch.BackgroundFetchResult.NewData;
		} catch (error) {
			console.error("Background task error:", error);

			// Indicate failure
			return BackgroundFetch.BackgroundFetchResult.Failed;
		}
	});
};

// Example function to simulate fetching step count
const fetchSteps = async () => {
	return new Promise((resolve) => setTimeout(() => resolve(100), 1000));
};

export { BACKGROUND_STEP_TASK }; // Export task name for usage in App.tsx
