import React, { useEffect, useState } from "react";
import { Pedometer } from "expo-sensors";

export default function pedometerApi(){
    const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
    const [stepCount, setStepCount] = useState(0);

    useEffect(() => {
		Pedometer.isAvailableAsync().then(
			(result) => setIsPedometerAvailable(result ? "available" : "unavailable"),
			(error) => setIsPedometerAvailable("error")
		);

		const subscription = Pedometer.watchStepCount((result) => {
			setStepCount(result.steps);
		});
		return () => subscription.remove();
    }, []);
}
