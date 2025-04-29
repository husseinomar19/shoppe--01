import { View,Text, Image, StyleSheet } from "react-native";

export default function FlashSale(){
    return(
        <>
        <View className="w-full mt-[25px]">
            <Text className="font-bold text-[21px]">
            Flash Sale
            </Text>
            
            <View className="flex w-full flex-row flex-wrap gap-[5px] mt-4">

               <View className="w-[114px] h-[114px] relative p-[5px]" style={styles.box}>
                <Image 
                className="w-full h-full rounded-[5px]"
                source={require("@/assets/images/sho.png")} />
                <Text className="text-white font-bold text-[13px] absolute right-0 bg-[#F81140] rounded-[5px] p-1">-20%</Text>
               </View>

               <View className="w-[114px] h-[114px] relative p-[5px]" style={styles.box}>
                <Image 
                className="w-full h-full rounded-[5px]"
                source={require("@/assets/images/newitems.png")} />
                <Text className="text-white font-bold text-[13px] absolute right-0 bg-[#F81140] rounded-[5px] p-1">-10%</Text>
               </View>

               <View className="w-[114px] h-[114px] relative p-[5px]" style={styles.box}>
                <Image 
                className="w-full h-full rounded-[5px]"
                source={require("@/assets/images/watch.png")} />
                <Text className="text-white font-bold text-[13px] absolute right-0 bg-[#F81140] rounded-[5px] p-1">-5%</Text>
               </View>

               <View className="w-[114px] h-[114px] relative p-[5px]" style={styles.box}>
                <Image 
                className="w-full h-full rounded-[5px]"
                source={require("@/assets/images/hood.png")} />
                <Text className="text-white font-bold text-[13px] absolute right-0 bg-[#F81140] rounded-[5px] p-1">-30%</Text>
               </View>

               <View className="w-[114px] h-[114px] relative p-[5px]" style={styles.box}>
                <Image 
                className="w-full h-full rounded-[5px]"
                source={require("@/assets/images/bik.png")} />
                <Text className="text-white font-bold text-[13px] absolute right-0 bg-[#F81140] rounded-[5px] p-1">-15%</Text>
               </View>

               <View className="w-[114px] h-[114px] relative p-[5px]" style={styles.box}>
                <Image 
                className="w-full h-full rounded-[5px]"
                source={require("@/assets/images/bag.png")} />
                <Text className="text-white font-bold text-[13px] absolute right-0 bg-[#F81140] rounded-[5px] p-1">-10%</Text>
               </View>

               



               
               
            </View>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: 'white',
      borderRadius: 9,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });