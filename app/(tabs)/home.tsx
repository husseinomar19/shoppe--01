import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Gategory from "@/assets/components/category/category";
import TopProducts from "@/assets/components/topproduct/topproducts"
import NewItems from "@/assets/components/newitems/newitems";
import FlashSale from "@/assets/components/flashsale/flashsale";
import MostPopular from "@/assets/components/mostpopular/mostpopular";
import JustForYou from "@/assets/components/justforyou/justforyou";

export default function Homescreen() {
  return (
    <SafeAreaView className="flex-1 bg-white h-full w-full">
      <ScrollView
      showsVerticalScrollIndicator={false} className="px-5 w-full">

        <View className="flex flex-row w-full justify-between items-center">
          <Text className="text-[28px] font-bold">Shop</Text>

          <View className="relative">
            <TextInput
              className="p-3 bg-[#F8F8F8] rounded-[18px] w-[248px]"
              placeholder="Search"
            />
            <EvilIcons
              className="absolute top-[9px] right-3"
              name="search"
              size={24}
              color="#C7C7C7"
            />
          </View>
        </View>

        <View className="w-full h-[140px] bg-black mt-[25px] overflow-hidden relative rounded-[9px]">
          <Image
            className="w-full h-[140px] bg-cover absolute z-0"
            source={require("../../assets/images/gril.png")}
            alt="png"
          />

          <Text className="text-[29px] font-bold text-white mt-[10px] mr-[20px] ml-[20px]">
            Big Sale
          </Text>
          <Text className="text-white font-bold text-[12px] mr-[20px] ml-[20px] mt-1">
            Up to 50%
          </Text>

          <Text className="absolute text-white font-bold text-[12px] bottom-[10px] ml-[20px] w-[70px]">
            Happening Now
          </Text>
        </View>


         <Gategory />

         <TopProducts />

         <NewItems />

         <FlashSale />

         <MostPopular />
         
         <JustForYou />

         

      </ScrollView>
    </SafeAreaView>
  );
}
