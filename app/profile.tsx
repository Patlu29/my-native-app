import { ScrollView, StyleSheet, Text } from "react-native";

export default function profile() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>This is a modal</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
