import React from "react";

import { View, ImageBackground, Text } from "react-native";
import tw from "twrnc";

export const GlassMorphed = {
    fullWidth: [tw`w-[100%] p-4 rounded-xl m-auto`, { backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }],
}