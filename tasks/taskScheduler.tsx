import * as BackgroundFetch from "expo-background-fetch";
import { BackgroundFetchStatus } from "expo-background-fetch";
import { BACKGROUND_STEP_TASK } from "./backgroundTask";

export const scheduleTask = async () => {
	try {
		const status = await BackgroundFetch.getStatusAsync();
		if (status === BackgroundFetchStatus.Restricted || status === BackgroundFetchStatus.Denied) {
			console.error("Background fetch is disabled.");
			return;
		}

		await BackgroundFetch.registerTaskAsync(BACKGROUND_STEP_TASK, {
			minimumInterval: 60, // Run every 60 seconds
			stopOnTerminate: false,
			startOnBoot: true,
		});

		console.log("Task scheduled successfully!");
	} catch (error) {
		console.error("Failed to schedule task:", error);
	}
};
