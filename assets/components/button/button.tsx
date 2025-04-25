import { TouchableOpacity, Text } from "react-native";

interface Prop {
  titel: string;
  background?: string;
  action: () => void;
}

export default function Button({ titel, background, action }: Prop) {
  
  const buttonBackground = background === "black" ? "bg-black" : "bg-[#004CFF]";

  return (
    <TouchableOpacity
      onPress={action}
      className={`${buttonBackground} w-full h-[61px] rounded-[16px] mt-[100px] flex justify-center items-center`}
    >
      <Text className="text-white text-[20px] font-light">{titel}</Text>
    </TouchableOpacity>
  );
}
