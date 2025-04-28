import { View ,Text, Image ,StyleSheet  } from "react-native";
import Svg, { Path } from 'react-native-svg';
export default function Gategory(){
    return(
        <>
        <View className="mt-[20px] w-full">

            <View className="w-full flex flex-row justify-between items-center">
                <Text className="font-bold text-[21px]">
                Categories
                </Text>
               
               <View className="flex flex-row justify-center items-center gap-2">
                <Text className="font-bold text-[15px]">
                    See All
                </Text>
                <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                          <Path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004CFF"/>
                          <Path d="M16.6715 9.29492L15.4918 10.4987L19.2475 14.146H8.08887V15.8312H19.2475L15.4918 19.4785L16.6715 20.6822L22.5457 14.9886L16.6715 9.29492Z" fill="white"/>
                </Svg>
               </View>

            </View>

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