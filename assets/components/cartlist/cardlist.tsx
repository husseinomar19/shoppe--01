import { Text, View, Image, StyleSheet } from "react-native";
import Svg, { Path, Defs, ClipPath, Rect, G } from "react-native-svg";
import TrashIcon from "@/assets/svg/trashicon";
import {useState } from "react";
export default function CartList() {
    const [count , setCount] = useState(2);
  return (
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
          <Text className="font-medium text-[14px] mt-[15px]">
            Pink, Size M
          </Text>

          <View className="flex flex-row justify-between items-center mt-[14px]">
            <Text className="font-bold text-[18px]">$17,00</Text>

            <View className="flex flex-row justify-center items-center gap-2">
              {count === 1 ?  "" : 
              <Svg
              onPress={ () => setCount ( count - 1)} width={30} height={30} viewBox="0 0 30 30" fill="none">
                <Path
                  d="M15 1C22.732 1 29 7.26801 29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1Z"
                  stroke="#004BFE"
                  strokeWidth={2}
                />
                <Path
                  d="M10.5 15.5H19.5"
                  stroke="#004CFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </Svg> 
              }

              <Text className="bg-[#E5EBFC] px-[15px] py-[5px] rounded-[5px]">
                {count}
              </Text>

              <Svg
              onPress={ () => setCount ( count + 1)}
               width={30} height={30} viewBox="0 0 30 30" fill="none">
                <Path
                  d="M15 1C22.732 1 29 7.26801 29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1Z"
                  stroke="#004BFE"
                  strokeWidth={2}
                />
                <G clipPath="url(#clip0)">
                  <Path
                    d="M15 9.5V20.5"
                    stroke="#004BFE"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <Path
                    d="M20.5 15H9.5"
                    stroke="#004BFE"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0">
                    <Rect width={11} height={11} fill="white" x={9.5} y={9.5} />
                  </ClipPath>
                </Defs>
              </Svg>


            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
