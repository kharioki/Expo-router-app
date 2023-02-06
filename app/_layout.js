import { Stack, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Alert } from "react-native";

export default () => {
  const router = useRouter();

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
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <AntDesign
              onPress={() => router.push('/modal')}
              name="infocirlceo"
              size={22}
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#1e2632',
          headerRight: () => (
            <AntDesign
              onPress={() => router.back()}
              name="closecircleo"
              size={22}
              color="black"
            />
          ),
        }}
      />
    </Stack>
  );
}
