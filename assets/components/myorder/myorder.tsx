import { View, Text } from "react-native";

export default function MyOrder() {
  return <>
   <View className="w-full mt-[25px]">
    <Text className="font-bold text-[21px]">
    My Orders
    </Text>

    <View className="flex flex-row justify-between items-center w-full mt-[15px]">

        <Text className="px-[20px] py-[8px] bg-[#E5EBFC] text-[#0042E0] font-medium text-[16px] rounded-[18px]">
         To Pay
        </Text>
        <Text className="px-[20px] py-[8px] bg-[#E5EBFC] text-[#0042E0] font-medium text-[16px] rounded-[18px]">
        To Recieve
        </Text>
        <Text className="px-[20px] py-[8px] bg-[#E5EBFC] text-[#0042E0] font-medium text-[16px] rounded-[18px]">
        To Review
        </Text>

    </View>
   </View>
  </>;
}
