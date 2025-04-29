import { SafeAreaView, ScrollView, Text, View, Image ,StyleSheet , TouchableOpacity} from "react-native"
import Feather from '@expo/vector-icons/Feather';
import Svg, { Path } from "react-native-svg"
export default function Account(){
    return(
        <>
        <SafeAreaView className="flex-1 bg-white h-full w-full">
            <ScrollView
            showsVerticalScrollIndicator={false} className="px-5 w-full">

                <View className="flex flex-row justify-between items-center mt-2">

                    <View className="flex flex-row justify-center items-center gap-4">
                        <View className="w-[65px] h-[65px] rounded-full" style={styles.box}>
                            <Image
                            className="w-full h-full rounded-full border-white border-4"
                            source={require("@/assets/images/bag.png")}
                            />
                        </View>
                     
                     <TouchableOpacity className="bg-[#0C54FF] rounded-[18px] px-6 py-3">
                        <Text className="text-white font-medium text-[16px]">My Activity</Text>
                     </TouchableOpacity>

                    </View>

                <Feather name="settings" size={24} color="#004BFE" /> 

                </View>

                <Text className="font-bold text-[35px] tracking-[0.5px] mt-[25px]">Hello, Romina!</Text>

                <View className="mt-[25px] px-2 relative w-full">
                    <Text className="text-[14px] font-bold">
                    Announcement  
                    </Text>
                    <Text className="text-[11px] w-[280px] mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.
                    </Text>
                    <View className="absolute right-0 bottom-0">
                    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <Path
                                  d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                  fill="#004CFF"
                                />
                                <Path
                                  d="M16.6715 9.29492L15.4918 10.4987L19.2475 14.146H8.08887V15.8312H19.2475L15.4918 19.4785L16.6715 20.6822L22.5457 14.9886L16.6715 9.29492Z"
                                  fill="white"
                                />
                    </Svg>
                    </View>


                </View>


                <View className="mt-[25px] w-full">
                            <Text className="font-bold text-[21px]">
                            Recently viewed
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