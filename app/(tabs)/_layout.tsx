import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import {Text, View} from "react-native"
export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
            tabBarStyle: {
                borderColor : "white"
            }
        }}>
            <Tabs.Screen name="home"
            options={{
                tabBarShowLabel : false,
                headerShown: false,
                
                tabBarIcon : ({focused} : {focused : boolean}) =>(
                    <>
                    <View className="relative">
                    <Feather name="home" size={24} color={focused ? "black" : "#004CFF"} />
                    {focused ? (<View className="w-[24px] h-[2px] rounded-lg bg-black bottom-[-10px] absolute"></View>) : ""}
                    </View>
                    
                    </>
                )
            }}
            
            />


<Tabs.Screen name="melist"
            options={{
                tabBarShowLabel : false,
                headerShown: false,

                tabBarIcon : ({focused} : {focused : boolean}) => (
                    <>
                    <View className="relative">
                    <Feather name="heart" size={24} color={focused ? "black" : "#004CFF"} />
                    {focused ? (<View className="w-[24px] h-[2px] rounded-lg bg-black bottom-[-10px] absolute"></View>) : ""}
                    </View>
                    </>
                )
            }}
            />


<Tabs.Screen name="shopcar"
            options={{
                tabBarShowLabel : false,
                headerShown: false,
                tabBarIcon :  ({focused} : {focused : boolean}) =>(
                    <>
                    <View className="relative">
                    <Feather name="shopping-bag" size={24} color={focused ? "black" : "#004CFF"} />
                    {focused ? (<View className="w-[24px] h-[2px] rounded-lg bg-black bottom-[-10px] absolute"></View>) : ""}
                    </View>
                    </>
                )
            }}
            
            />

            <Tabs.Screen 
            name="account"
            options={{
                tabBarShowLabel : false,
                headerShown: false,
              
              tabBarIcon : ({focused} : {focused : boolean}) =>(
                <>
                 <View className="relative">
                <Feather name="user" size={24} color={focused ? "black" : "#004CFF"} />
                {focused ? (<View className="w-[24px] h-[2px] rounded-lg bg-black bottom-[-10px] absolute"></View>) : ""}
                </View>
                </>
              )
            }} />
            
        </Tabs>
    )
}