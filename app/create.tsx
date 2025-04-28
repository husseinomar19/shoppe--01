import React from "react";
import { View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import BackgroundSvg from "../assets/svg/backsvg";
import Button from "@/assets/components/button/button";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
export default function CreateAccount() {

  const router = useRouter();


  const toHome =(router : any) =>{
      router.push("home")
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="relative bg-white h-full w-full">
          <BackgroundSvg />

          <View className="w-full h-full px-6">
            <Text className="text-[50px] w-[197px] font-bold mt-[200px]">
              Create Account
            </Text>

            <Image
              className="w-[90px] h-[90px] mt-[50px]"
              source={require("../assets/images/camera.png")}
            />

            <TextInput
              className="w-full bg-[#F8F8F8] h-[60px] mt-[25px] px-3 rounded-[40px]"
              placeholder="Email"
            />

            <TextInput
              className="w-full bg-[#F8F8F8] h-[60px] mt-[10px] px-3 rounded-[40px]"
              placeholder="Password"
              secureTextEntry
            />


          <Button
          titel="Done"
          margin="50"
          action={() => toHome(router)} />

          <View className="flex justify-center items-center w-full">
          <Link
          className="flex-1 text-cente p-5" href={"/"}>
          Cancel
          </Link>
          </View>

          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
