import { View ,Text, Image ,StyleSheet} from "react-native";

export default function TopProducts(){
    return(
        <>
        <View className="mt-[25px] w-full">
            <Text className="font-bold text-[21px]">
            Top Products
            </Text>

            <View className="flex flex-row w-full mt-4 gap-[9px] justify-center items-center">

              <View className="w-[65px] h-[65px] rounded-full" style={styles.box}>
              <Image
              className="w-full h-full rounded-full border-white border-4"
              source={require("@/assets/images/bag.png")}
               />
              </View>

              <View className="w-[65px] h-[65px] rounded-full" style={styles.box}>
              <Image
              className="w-full h-full rounded-full border-white border-4"
              source={require("@/assets/images/watch.png")}
               />
              </View>

              <View className="w-[65px] h-[65px] rounded-full" style={styles.box}>
              <Image
              className="w-full h-full rounded-full border-white border-4"
              source={require("@/assets/images/hood.png")}
               />
              </View>

              <View className="w-[65px] h-[65px] rounded-full" style={styles.box}>
              <Image
              className="w-full h-full rounded-full border-white border-4"
              source={require("@/assets/images/sho.png")}
               />
              </View>

              <View className="w-[65px] h-[65px] rounded-full" style={styles.box}>
              <Image
              className="w-full h-full rounded-full border-white border-4"
              source={require("@/assets/images/bik.png")}
               />
              </View>

              

              

             
              

            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    box: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.35,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
