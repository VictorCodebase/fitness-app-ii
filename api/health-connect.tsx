import walkingData from "../vfd.json"; // Adjust the path as needed

// Simulating the readRecords function that reads the data from a JSON file and filters it
interface WalkingRecord {
	date: string;
	activeCaloriesBurned: number;
	elevationGained: number;
	heartRate: number;
	distance: number;
}

interface TimeRangeFilter {
	startTime: string;
	endTime: string;
	operator: "between";
}

interface Filters {
	timeRangeFilter?: TimeRangeFilter;
}

export async function readRecords(recordType: keyof WalkingRecord, filters: Filters) {
	return new Promise((resolve) => {
		const data = walkingData.data;

		const filteredData = data.filter((record) => {
			if (filters.timeRangeFilter) {
				const { startTime, endTime, operator } = filters.timeRangeFilter;
				const startDate = new Date(startTime);
				const endDate = new Date(endTime);
				const recordDate = new Date(record.date);

				if (operator === "between") {
					return recordDate >= startDate && recordDate <= endDate;
				}
			}
			return true;
		});

		// Map the data to the desired format
		const result = filteredData.map((record) => ({
			date: record.date,
			value: record[recordType], // e.g., 'activeCaloriesBurned', 'elevationGained', 'heartRate'
		}));
		resolve(result);
	});
}

export async function initialize() {
	return new Promise((resolve) => {
		resolve(true);
	});
}

export async function requestPermission(permissions: any) {
	return new Promise((resolve) => {
		resolve(true);
	});
}
