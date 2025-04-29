import { View ,Text ,Image ,StyleSheet} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function JustForYou(){
    return(
        <>
        <View className="w-full mt-1 mb-2">

            <Text className="font-bold text-[21px]">
            Just For You <FontAwesome name="star" size={14} color="#004CFF" />
            </Text>

            <View className="w-full flex flex-row flex-wrap mt-[25px] gap-2">


                <View className="w-[174px] p-[5px] rounded-[9px]" style = {styles.box}>
                                    <Image
                                    className="w-full h-[171px] rounded-[5px]"
                                    source={require("@/assets/images/you1.png")} />
                                     <Text className="text-[12px] mt-2">
                                     Lorem ipsum dolor sit amet consectetur.
                                     </Text>
                                     <Text className="font-bold text-[17px] mt-2">
                                     $17,00
                                     </Text>
                
                </View> 

                <View className="w-[174px] p-[5px] rounded-[9px]" style = {styles.box}>
                                    <Image
                                    className="w-full h-[171px] rounded-[5px]"
                                    source={require("@/assets/images/you2.png")} />
                                     <Text className="text-[12px] mt-2">
                                     Lorem ipsum dolor sit amet consectetur.
                                     </Text>
                                     <Text className="font-bold text-[17px] mt-2">
                                     $17,00
                                     </Text>
                
                </View>

                <View className="w-[174px] p-[5px] rounded-[9px]" style = {styles.box}>
                                    <Image
                                    className="w-full h-[171px] rounded-[5px]"
                                    source={require("@/assets/images/you3.png")} />
                                     <Text className="text-[12px] mt-2">
                                     Lorem ipsum dolor sit amet consectetur.
                                     </Text>
                                     <Text className="font-bold text-[17px] mt-2">
                                     $17,00
                                     </Text>
                
                </View>

                <View className="w-[174px] p-[5px] rounded-[9px]" style = {styles.box}>
                                    <Image
                                    className="w-full h-[171px] rounded-[5px]"
                                    source={require("@/assets/images/you4.png")} />
                                     <Text className="text-[12px] mt-2">
                                     Lorem ipsum dolor sit amet consectetur.
                                     </Text>
                                     <Text className="font-bold text-[17px] mt-2">
                                     $17,00
                                     </Text>
                
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