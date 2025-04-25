import { TouchableOpacity, Text } from "react-native";

interface Prop {
  titel: string;
  background?: string;
  margin? : string;
  action: () => void;
}

export default function Button({ titel, background,margin, action }: Prop) {
  
  const buttonBackground = background === "black" ? "bg-black" : "bg-[#004CFF]";
  const margintop = margin === "50" ? "mt-[50px]" : "mt-[100px]";

  return (
    <TouchableOpacity
      onPress={action}
      className={`${buttonBackground} w-full h-[61px] rounded-[16px] ${margintop} flex justify-center items-center`}
    >
      <Text className="text-white text-[20px] font-light">{titel}</Text>
    </TouchableOpacity>
  );
}
