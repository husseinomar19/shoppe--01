import { SafeAreaView, ScrollView, Text, View ,Image ,StyleSheet} from "react-native"
import Header from "@/assets/components/header/header"
import WishList from "@/assets/components/wishlist/wishlist";
import MostPopular from "@/assets/components/mostpopular/mostpopular";
export default function MeList(){
    return(
        <>
        <SafeAreaView className="flex-1 bg-white h-full w-full">
            <ScrollView className="px-4">
              
             <Text className="text-[28px] font-bold">
             Wishlist
             </Text>


             <View className="mt-[10px]">
             <Header
             titel="Recently viewed"/>


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
              

            <View className="w-full mt-[20px] flex gap-4">

                <WishList />
                <WishList />
                <WishList />
                <WishList />
                <WishList />
                <WishList />

                

            </View>


            <MostPopular />


             
             

            </ScrollView>
        </SafeAreaView>
        
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