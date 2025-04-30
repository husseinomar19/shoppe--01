import { Text, View, Image ,StyleSheet  } from "react-native"
import AddCart from "@/assets/svg/addcart";
import TrashIcon from "@/assets/svg/trashicon";
export default function WishList(){
    return(
        <>
        <View className="flex flex-row justify-senter items-start gap-3">
        
                           <View className="w-[129px] h-[109px] relative" style={styles.box}>
                            <Image
                            className="w-full h-full border-white border-4 rounded-[9px]"
                            source={require("@/assets/images/you1.png")}
                            />
        
                            <View className="absolute bottom-3 left-3">
                                <TrashIcon />
                            </View>
                           </View>
        
                        <View className="w-[220px]">
                            <Text className="text-[12px] w-[170px] mt-1">
                            Lorem ipsum dolor sit amet consectetur.
                            </Text>
                            <Text className="font-bold text-[18px] mt-[14px]">
                            $17,00
                            </Text>
        
                            <View className="flex flex-row justify-between items-center mt-[14px]">
        
                                <View className="flex flex-row  justify-center items-center gap-2">
                                <Text className="bg-[#E5EBFC] px-[15px] py-[5px] rounded-[5px]">
                                    Pink 
                                </Text>
                                <Text className="bg-[#E5EBFC] px-[15px] py-[5px] rounded-[5px]">
                                    M
                                </Text>
                                </View>
        
                                <AddCart />
                                
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