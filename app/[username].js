import { View, Text, Button } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';

const profile = () => {
  const router = useRouter();

  const { name, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello @{username}!!!</Text>

      <Button onPress={() => router.back()} title="Go back" />
    </View>
  )
}

export default profile