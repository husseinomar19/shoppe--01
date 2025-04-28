import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface props {
    titel : string,

}

export default function Header({titel} : props) {
  return (
    <>
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="font-bold text-[21px]">{titel}</Text>

        <View className="flex flex-row justify-center items-center gap-2">
          <Text className="font-bold text-[15px]">See All</Text>
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
    </>
  );
}
