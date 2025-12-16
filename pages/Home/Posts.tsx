import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-paper";
import { profileData } from "./mockProfile";

const Styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

const Posts = () => {
  return (
    <View style={{ padding: 16 }}>
      {profileData.map((post) => (
        <View
          key={post.id}
          style={{
            backgroundColor: "#1e1e1eff",
            borderRadius: 8,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Image
              src={post.profilePhoto}
              style={{ width: 30, height: 30, borderRadius: 12 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              {post.username}
            </Text>
          </View>

          <View
            style={{
              borderRadius: 12,
              borderColor: "#a7a3a3ff",
              borderWidth: 1,
              padding: 8,
              marginBottom: 8,
            }}
          >
            <Image
              src={post.postImage}
              style={{ width: "100%", height: 200 }}
            />
            <Text style={{ color: "white", fontSize: 16, marginBottom: 8 }}>
              {post.content}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "60%",
              marginLeft: 5,
            }}
          >
            <Button
              icon={(props) => (
                <Icon
                  source="cards-heart-outline"
                  size={30}
                  color={props.color}
                />
              )}
              onPress={() => {}}
            >
              <Text style={Styles.text}>{post.likes}</Text>
            </Button>
            <Button
              icon={(props) => (
                <Icon source="comment-outline" size={30} color={props.color} />
              )}
              onPress={() => {}}
            >
              <Text style={Styles.text}>{post.comments}</Text>
            </Button>
            <Button
              icon={(props) => (
                <Icon source="share-outline" size={35} color={props.color} />
              )}
              onPress={() => {}}
            >
              <Text style={Styles.text}>{post.shares}</Text>
            </Button>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Posts;
