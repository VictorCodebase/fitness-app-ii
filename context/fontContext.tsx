// context/FontContext.tsx
import React, { createContext, useContext, ReactNode } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

interface FontContextProps {
	fontsLoaded: boolean;
}

const FontContext = createContext<FontContextProps | undefined>(undefined);

export const FontProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	// Load fonts using Expo's useFonts hook
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
		"Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
		"Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
	});

	if (!fontsLoaded) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return <FontContext.Provider value={{ fontsLoaded }}>{children}</FontContext.Provider>;
};

export const useFontContext = (): FontContextProps => {
	const context = useContext(FontContext);
	if (!context) {
		throw new Error("useFontContext must be used within a FontProvider");
	}
	return context;
};
