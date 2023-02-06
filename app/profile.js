import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const profile = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Profile</Text>

      <Button onPress={() => router.back()} title="Go back" />
    </View>
  )
}

export default profile