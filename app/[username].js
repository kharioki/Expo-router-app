import { View, Text, Button } from 'react-native';
import { useRouter, useSearchParams, Stack } from 'expo-router';

const profile = () => {
  const router = useRouter();

  const { name, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: username,
          headerStyle: { backgroundColor: '#1e2632' },
          headerTintColor: '#ffe030',
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello {name} @{username}!!!</Text>

      <Button onPress={() => router.back()} title="Go back" />
    </View>
  )
}

export default profile