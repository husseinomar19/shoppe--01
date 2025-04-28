import { ScrollView, View, Image ,StyleSheet ,Text} from "react-native";
import Header from "../header/header";

export default function NewItems(){
    return (
        <>
        <View className="w-full mt-[30px]">

            <Header
            titel="New Items" />


            <ScrollView
            className="mt-2 pt-2 mb-2"
            horizontal={true}
            showsHorizontalScrollIndicator = {false} >

                <View className="flex flex-row gap-3 p-2">

                <View className="w-[140px] p-[5px] rounded-[9px]" style = {styles.box}>
                    <Image
                    className="w-[130px] h-[130px] rounded-[5px]"
                    source={require("@/assets/images/newitems.png")} />
                     <Text className="text-[12px] mt-1">
                     Lorem ipsum dolor sit amet consectetur.
                     </Text>
                     <Text className="font-bold text-[17px] mt-2">
                     $17,00
                     </Text>

                </View>


                <View className="w-[140px] p-[5px] rounded-[9px]" style = {styles.box}>
                    <Image
                    className="w-[130px] h-[130px] rounded-[5px]"
                    source={require("@/assets/images/sho.png")} />
                     <Text className="text-[12px] mt-1">
                     Lorem ipsum dolor sit amet consectetur.
                     </Text>
                     <Text className="font-bold text-[17px] mt-2">
                     $17,00
                     </Text>

                </View>

                <View className="w-[140px] p-[5px] rounded-[9px]" style = {styles.box}>
                    <Image
                    className="w-[130px] h-[130px] rounded-[5px]"
                    source={require("@/assets/images/bag.png")} />
                     <Text className="text-[12px] mt-1">
                     Lorem ipsum dolor sit amet consectetur.
                     </Text>
                     <Text className="font-bold text-[17px] mt-2">
                     $17,00
                     </Text>

                </View>

                <View className="w-[140px] p-[5px] rounded-[9px]" style = {styles.box}>
                    <Image
                    className="w-[130px] h-[130px] rounded-[5px]"
                    source={require("@/assets/images/newitems.png")} />
                     <Text className="text-[12px] mt-1">
                     Lorem ipsum dolor sit amet consectetur.
                     </Text>
                     <Text className="font-bold text-[17px] mt-2">
                     $17,00
                     </Text>

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