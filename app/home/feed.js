import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const users = [
  {
    username: "tony",
    name: "Tony Stark",
  },
  {
    username: "bobo",
    name: "Rose Wambui",
  },
  {
    username: "jane",
    name: "Jane Doe",
  },
]

export default function Feed() {
  return (
    <View style={styles.container}>
      {/* <Stack.Screen options={{ title: "Home" }} /> */}
      <View style={styles.main}>
        <Text style={styles.title}>Feed page</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        {users.map((user) => (
          <Link
            key={user.username}
            href={`/${user.username}`}
            style={styles.link}
          >
            Go to {user.name}'s profile
          </Link>
        ))}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    color: "orange",
    marginVertical: 12,
    fontWeight: "semibold",
  },
});
