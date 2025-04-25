import { SafeAreaView , Text , View ,TouchableOpacity } from "react-native";
import ShoppeIcon from "../assets/svg//shoppe";
import Svg, { Path } from 'react-native-svg';
import Button from "../assets/components/button/button"
import { useRouter  } from "expo-router";
export default function LoginScreen() {
   const router = useRouter();
  const handelrouter =  (router : any) =>{
    router.push("/create");
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      
     <View className="flex justify-center items-center h-full px-5">
      <ShoppeIcon />
      <Text  className="text-[52px] font-bold">Shoppe</Text>
       <Text className="text-[19px] font-light mt-[15px] text-[#202020]">Beautiful eCommerce UI Kit</Text> 
       <Text className="text-[19px] font-light mt-[10px] text-[#202020]">for your online store</Text> 



       <Button
       titel="Let's get started" 
       action={() => handelrouter(router)}/>
       <View className="flex flex-row justify-center items-center mt-[20px] gap-2">
       <Text className="text-[15px] font-light text-[#202020]">I already have an account</Text>
        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <Path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#004CFF"/>
          <Path d="M16.6715 9.29492L15.4918 10.4987L19.2475 14.146H8.08887V15.8312H19.2475L15.4918 19.4785L16.6715 20.6822L22.5457 14.9886L16.6715 9.29492Z" fill="white"/>
       </Svg>
       </View>


     </View>




     
    </SafeAreaView>
  );
}
