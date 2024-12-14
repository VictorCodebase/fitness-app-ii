import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Cog6ToothIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useFontContext } from "../context/fontContext";
import { useUnreadNotificationCount } from "../context/NotificationContext";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

const TopBar = () => {
  const navigation = useNavigation();
  const { fontsLoaded } = useFontContext();

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  const { unreadCount } = useUnreadNotificationCount();

  return (
    <View style={tw`relative h-20 w-[100%] p-4`}>
      {/* Notification and Settings Icons */}
      <View style={tw`absolute top-2 right-2 flex-row items-center`}>
        {/* Notification Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")} style={tw`mr-4`}>
          <View style={tw`relative`}>
            <Ionicons name="notifications" size={24} color="white" style={tw`h-6 w-6`} />
            {/* Red Dot if there are unread notifications */}
            {unreadCount > 0 && (
              <View
                style={tw`absolute top-0 right-0 bg-red-600 w-3 h-3 rounded-full border-2 border-white`}
              />
            )}
          </View>
        </TouchableOpacity>

        {/* Settings Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Cog6ToothIcon style={tw`h-6 w-6 text-white`} />
        </TouchableOpacity>
      </View>

      {/* Greeting Section */}
      <View>
        <Text style={[tw`text-white`, { fontFamily: "Roboto-Light", fontSize: 15 }]}>
          Good Morning, Group!
        </Text>
        <Text style={[tw`text-white`, { fontFamily: "Roboto-Bold", fontSize: 22 }]}>
          Ready To A Morning Run?
        </Text>
      </View>
    </View>
  );
};

export default TopBar;
