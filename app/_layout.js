import { Stack } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Alert } from "react-native";

export default () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffe030'
        },
        headerTintColor: '#1e2632',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerRight: () => (
          <AntDesign
            onPress={() => Alert.alert('More info...')}
            name="infocirlceo"
            size={22}
            color="black"
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
