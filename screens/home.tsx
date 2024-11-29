import React from "react";

import { View, Text, ScrollView, SafeAreaView } from "react-native";

import TopPadding from "../components/topPadding";
import HomeBackground from "../components/homeBackground";
import TopBar from "../components/topBar";

export default function Home() {
	return (
		<>
			<HomeBackground />
			<SafeAreaView>
				<ScrollView>
					<TopPadding />
                    <TopBar />
				</ScrollView>
			</SafeAreaView>
		</>
	);
}
