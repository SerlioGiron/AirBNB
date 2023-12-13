import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Image } from "react-native";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (<Tab.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () => {
                return <Image source={{
                    
                }} />
            }
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
    );
}



export default TabNavigator;