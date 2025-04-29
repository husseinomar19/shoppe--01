import { View ,ScrollView, Image, Text ,StyleSheet} from "react-native";
import Header from "../header/header";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function MostPopular(){
    return(
        <>
        <View className="w-full mt-[25px]">
            <Header
            titel="Most Popular" />


             <ScrollView
                        className="mt-2 pt-2 mb-2"
                        horizontal={true}
                        showsHorizontalScrollIndicator = {false} >
            
                            <View className="flex flex-row gap-3 p-2">
            
                            <View className="w-[104px] p-[5px] rounded-[9px]" style = {styles.box}>
                                <Image
                                className="w-[94px] h-[130px] rounded-[5px]"
                                source={require("@/assets/images/most1.png")} />
                                
                                <View className="flex flex-row justify-between items-center mt-1">
                                <Text className="text-[15px] mt-1 font-bold">
                                1780 <AntDesign name="heart" size={14} color="#0042E0" />
                                 </Text>
                                 <Text className="font-medium text-[13px] mt-2">
                                 New
                                 </Text>
                                </View>
            
                            </View>


                            <View className="w-[104px] p-[5px] rounded-[9px]" style = {styles.box}>
                                <Image
                                className="w-[94px] h-[130px] rounded-[5px]"
                                source={require("@/assets/images/most2.png")} />
                                
                                <View className="flex flex-row justify-between items-center mt-1">
                                <Text className="text-[15px] mt-1 font-bold">
                                1780 <AntDesign name="heart" size={14} color="#0042E0" />
                                 </Text>
                                 <Text className="font-medium text-[13px] mt-2">
                                 Sale
                                 </Text>
                                </View>
            
                            </View>


                            <View className="w-[104px] p-[5px] rounded-[9px]" style = {styles.box}>
                                <Image
                                className="w-[94px] h-[130px] rounded-[5px]"
                                source={require("@/assets/images/most3.png")} />
                                
                                <View className="flex flex-row justify-between items-center mt-1">
                                <Text className="text-[15px] mt-1 font-bold">
                                1780 <AntDesign name="heart" size={14} color="#0042E0" />
                                 </Text>
                                 <Text className="font-medium text-[13px] mt-2">
                                 Hot
                                 </Text>
                                </View>
            
                            </View>


                            <View className="w-[104px] p-[5px] rounded-[9px]" style = {styles.box}>
                                <Image
                                className="w-[94px] h-[130px] rounded-[5px]"
                                source={require("@/assets/images/most1.png")} />
                                
                                <View className="flex flex-row justify-between items-center mt-1">
                                <Text className="text-[15px] mt-1 font-bold">
                                1780 <AntDesign name="heart" size={14} color="#0042E0" />
                                 </Text>
                                 <Text className="font-medium text-[13px] mt-2">
                                 New
                                 </Text>
                                </View>
            
                            </View>
            
            
                            
            
                           
            
                            
            
            
                            </View>
            
                        </ScrollView>

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