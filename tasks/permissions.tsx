import * as Permissions from "expo-permissions";
import { useEffect } from "react";

const requestPermissions = async () => {
	const { status } = await Permissions.askAsync(Permissions.MOTION);
	if (status !== "granted") {
		console.error("Motion permissions are required for step tracking");
	}
};

useEffect(() => {
	requestPermissions();
}, []);
