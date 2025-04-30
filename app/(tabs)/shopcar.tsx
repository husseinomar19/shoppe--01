import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import CartList from "@/assets/components/cartlist/cardlist";
import WishList from "@/assets/components/wishlist/wishlist";
export default function ShopCar() {

  return (
    <>
      <SafeAreaView className="flex-1 bg-white h-full w-full">
        <ScrollView
        showsVerticalScrollIndicator={false} className="px-4">

          <View className="flex flex-row justify-start items-center gap-2">
          <Text className="font-bold text-[28px]">Cart</Text>
          <Text className="bg-[#E5EBFC] px-[10px] py-[5px] rounded-full text-[18px]">4</Text>
          </View>


          <View className="mt-[25px] px-2 relative w-full">

            <Text className="text-[14px] font-bold">Shipping Address</Text>

            <Text className="text-[11px] w-[280px] mt-1 leading-4">
              26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh
              city
            </Text>

            <View className="absolute right-0 bottom-0">
              <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                <Path
                  d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                  fill="#004BFE"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.7 18.6892V21.5016H11.5124L19.8073 13.2068L16.9948 10.3943L8.7 18.6892ZM21.9823 11.0318C22.2748 10.7393 22.2748 10.2668 21.9823 9.97434L20.2273 8.21937C19.9348 7.92688 19.4623 7.92688 19.1698 8.21937L17.7973 9.59185L20.6098 12.4043L21.9823 11.0318H21.9823Z"
                  fill="white"
                />
              </Svg>
            </View>

          </View>



        <View className="w-full mt-[20px] flex gap-4">
          <CartList />
          <CartList />
         </View>


         <Text className="font-bold text-[28px] mt-[25px]">From Your Wishlist</Text>
         
         <View className="w-full mt-[20px] flex gap-4">
          <WishList />
          <WishList />
          <WishList />
         </View>



          

        </ScrollView>

        <View className="fixed w-full flex flex-row justify-between items-center px-4 py-2">


            <View className="flex flex-row justify-center items-center gap-1">
                <Text className="font-extrabold text-[20px]">Total : </Text>
                <Text className="font-bold text-[18px]">$34,00</Text>
            </View>

            <TouchableOpacity className="bg-[#0C54FF] rounded-[11px] px-6 py-3">
                        <Text className="text-white font-medium text-[16px]">Checkout</Text>
            </TouchableOpacity>

          </View>
      </SafeAreaView>
    </>
  );
}
