import React from "react";

import Home from "../screens/home";
import Settings from "../screens/settings";
import UserProfile from "../screens/UserProfile";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, UserIcon } from "react-native-heroicons/outline";
import { RootStackParamList } from "../types";



const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="UserProfile" component={UserProfile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}