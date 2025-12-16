import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#121212ff",
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
        ☰
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        Tech-X
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        📭
      </Text>
    </View>
  );
};

export default Header;
