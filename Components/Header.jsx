import React from "react";
import {StyleSheet, Image, View, Text} from "react-native";

const Header = () => {
    return(
        <View style={StyleSheet.header}>
            
            <View><Text style={ { frontSize: 32, fontWeight: "bold" }}>Hello , devs
            </Text><Text style={ { frontSize: 12,}}>14 tasks today
            </Text></View>
            <View stle={StyleSheet.profiles}>
                <Image 
                sourse={requireNativeModule("../assets/profile.png")}
                style={{ width: 45, height: 45}}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 20,
    },
    profile: {
      width: 50,
      height: 50,
      backgroundColor: "white",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default Header;