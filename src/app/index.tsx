import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>Starting project</Text>
      <View style = {styles.description}>
        <Text style = {{fontWeight: 'bold', fontSize: 17}}>Denis Andre Dryagin</Text>
        <Text>I come from Lisbon, where I study in the Faculty of Science University of Lisbon.
          My favourite place in Lisbon is the Rivieira beach because I like beaches.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  description: {
    backgroundColor: '#e5c5c5',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
  },
});