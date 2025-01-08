import React from "react";
import { View, Button, Alert } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const SocialShare = () => {
	const handleShare = async () => {
		try {
			// Load the image asset
			const imageAsset = Asset.fromModule(require("../assets/medals/7ksteps.png"));
			await imageAsset.downloadAsync(); // Ensure the image is available locally

			// Get the local URI of the image
			const imageUri = imageAsset.localUri || imageAsset.uri;

			// Check if sharing is available
			if (await Sharing.isAvailableAsync()) {
				// Share the image
				await Sharing.shareAsync(imageUri, { dialogTitle: "Share Your Achievement!" });
			} else {
				Alert.alert("Sharing Not Available", "Sharing is not supported on this device.");
			}
		} catch (error) {
			Alert.alert("Error", "Something went wrong while sharing.");
		}
	};

	return (
		<View style={{ marginTop: 20 }}>
			<Button title="Share Your Achievement" onPress={handleShare} />
		</View>
	);
};

export default SocialShare;
