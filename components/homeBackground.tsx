//homeBackground.tsx
import React from "react";

import { View, ImageBackground, Text } from "react-native";
import tw from "twrnc";

const HomeBackground = () => {
	return (
		<View style={tw`h-full w-full absolute`}>
			{/* Background */}
			<ImageBackground source={require("../assets/background.jpg")} style={tw`h-full w-full`} />
		</View>
	);
};

export default HomeBackground;
