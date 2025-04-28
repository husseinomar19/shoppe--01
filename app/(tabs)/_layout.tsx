import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
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
                    <Feather name="home" size={24} color={focused ? "black" : "#004CFF"} />
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
                    <Feather name="heart" size={24} color={focused ? "black" : "#004CFF"} />
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
                    <Feather name="shopping-bag" size={24} color={focused ? "black" : "#004CFF"} />
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
                <Feather name="user" size={24} color={focused ? "black" : "#004CFF"} />
                </>
              )
            }} />
            
        </Tabs>
    )
}