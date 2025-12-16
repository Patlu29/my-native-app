import Header from "@/pages/Home/Header";
import Posts from "@/pages/Home/Posts";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView
        style={styles.content}
        // contentContainerStyle={styles.contentContainer}
      >
        <Posts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
  },
  header: {
    zIndex: 100,
  },
  content: {
    flex: 1,
  },
  // contentContainer: {
  //   paddingBottom: 32,
  // },
});
