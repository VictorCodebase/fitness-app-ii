import AppNavigation from "./navigation/appNavigation";
import { FontProvider } from "./context/fontContext";
import { useEffect } from "react";
import { registerBackgroundTask } from "./tasks/backgroundTask";
import { scheduleTask } from "./tasks/taskScheduler";
import * as BackgroundFetch from "expo-background-fetch";

export default function App() {
	//TODO: Use background tasks to fetch step count
	useEffect(() => {
		const initialize = async () => {
			registerBackgroundTask();
			try {
				await BackgroundFetch.registerTaskAsync("BACKGROUND_STEP_TRACKING", {
					minimumInterval: 60 * 15, // Run every 15 minutes (adjust as needed)
					stopOnTerminate: false, // Keep running after the app is terminated
					startOnBoot: true, // Start when the device boots up
				});
			} catch (error) {
				console.error("Failed to register background task:", error);
			}
		};

		initialize();
		return () => {
			// Unregister the task when the component unmounts
			BackgroundFetch.unregisterTaskAsync("BACKGROUND_STEP_TRACKING");
		};
	}, []);

	return (
		<FontProvider>
			<AppNavigation />
		</FontProvider>
	);
}
