// import { initialize, requestPermission, readRecords } from "react-native-health-connect";
import { readRecords, initialize, requestPermission } from "./health-connect";

const readSampleData = async () => {

	

	return result;
};

async function initializeRead(recordType: String){
	// initialize the client
	const isInitialized = await initialize();

	// request permissions
	const grantedPermissions = await requestPermission([{ accessType: "read", recordType: recordType }]);
}

export async function readActiveCaloriesBurned(startDate: string, endDate: string){
	const recordType = "activeCaloriesBurned";

	initializeRead(recordType)
	const result = await readRecords(recordType, {
		timeRangeFilter: {
			operator: "between",
			// startTime: "2024-12-01T00:00:00.000Z",
			// endTime: "2024-12-10T23:59:59.000Z",
			startTime: startDate,
			endTime: endDate,
		},
	});
	return result;
}

export async function readElevationGained(startDate: string, endDate: string) {
	const recordType = "elevationGained";

	initializeRead(recordType);
	const result = await readRecords(recordType, {
		timeRangeFilter: {
			operator: "between",
			startTime: startDate,
			endTime: endDate,
		},
	});
	return result;
}

export async function readHeartRate(startDate: string, endDate: string) {
	const recordType = "heartRate";

	initializeRead(recordType);
	const result = await readRecords(recordType, {
		timeRangeFilter: {
			operator: "between",
			startTime: startDate,
			endTime: endDate,
		},
	});
	return result;
}

export async function readDistanceWalked(startDate: string, endDate: string) {
	const recordType = "distance";

	initializeRead(recordType);
	const result = await readRecords(recordType, {
		timeRangeFilter: {
			operator: "between",
			startTime: startDate,
			endTime: endDate,
		},
	});
	console.log("result",result);
	return result;
}

