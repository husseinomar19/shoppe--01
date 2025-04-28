import { View ,Text, Image ,StyleSheet  } from "react-native";
import Svg, { Path } from 'react-native-svg';
import Header from "../header/header";
export default function Gategory(){
    return(
        <>
        <View className="mt-[20px] w-full">

            <Header
            titel="Categories" />

            <View className="w-full mt-[15px] flex flex-row justify-between flex-wrap gap-y-2">

            <View className="p-2 rounded-[9px]" style={styles.box}>
                    <Image 
                    className="w-[162px] h-[167px] bg-cover"
                    source={require('../../../assets/images/clothes.png')}
                    />
                    <View className="flex flex-row justify-between items-center mt-2">
                        <Text className="text-[17px] font-bold">
                        Clothing
                        </Text>

                        <Text className="font-bold text-[12px] px-2 py-1 bg-[#DFE9FF] rounded-[6px]" >
                        109
                        </Text>

                    </View>
                </View>

                <View className="p-2 rounded-[9px]" style={styles.box}>
                    <Image 
                    className="w-[162px] h-[167px] bg-cover"
                    source={require('../../../assets/images/shose.png')}
                    />
                    <View className="flex flex-row justify-between items-center mt-2">
                        <Text className="text-[17px] font-bold">
                        Shoes
                        </Text>

                        <Text className="font-bold text-[12px] px-2 py-1 bg-[#DFE9FF] rounded-[6px]" >
                        530
                        </Text>

                    </View>
                </View>

                <View className="p-2 rounded-[9px]" style={styles.box}>
                    <Image 
                    className="w-[162px] h-[167px] bg-cover"
                    source={require('../../../assets/images/bags.png')}
                    />
                    <View className="flex flex-row justify-between items-center mt-2">
                        <Text className="text-[17px] font-bold">
                        Bags
                        </Text>

                        <Text className="font-bold text-[12px] px-2 py-1 bg-[#DFE9FF] rounded-[6px]" >
                        87
                        </Text>

                    </View>
                </View>


                <View className="p-2 rounded-[9px]" style={styles.box}>
                    <Image 
                    className="w-[162px] h-[167px] bg-cover"
                    source={require('../../../assets/images/lingerie.png')}
                    />
                    <View className="flex flex-row justify-between items-center mt-2">
                        <Text className="text-[17px] font-bold">
                        Lingerie
                        </Text>

                        <Text className="font-bold text-[12px] px-2 py-1 bg-[#DFE9FF] rounded-[6px]" >
                        218
                        </Text>

                    </View>
                </View>

                <View className="p-2 rounded-[9px]" style={styles.box}>
                    <Image 
                    className="w-[162px] h-[167px] bg-cover"
                    source={require('../../../assets/images/watchs.png')}
                    />
                    <View className="flex flex-row justify-between items-center mt-2">
                        <Text className="text-[17px] font-bold">
                        Watch
                        </Text>

                        <Text className="font-bold text-[12px] px-2 py-1 bg-[#DFE9FF] rounded-[6px]" >
                        218
                        </Text>

                    </View>
                </View>

                <View className="p-2 rounded-[9px]" style={styles.box}>
                    <Image 
                    className="w-[162px] h-[167px] bg-cover"
                    source={require('../../../assets/images/hoodies.png')}
                    />
                    <View className="flex flex-row justify-between items-center mt-2">
                        <Text className="text-[17px] font-bold">
                        Hoodies
                        </Text>

                        <Text className="font-bold text-[12px] px-2 py-1 bg-[#DFE9FF] rounded-[6px]" >
                        218
                        </Text>

                    </View>
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