import { useSearchParams } from 'expo-router';
import { View, Text } from 'react-native'

const MessageRoom = () => {
  const { id } = useSearchParams()
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>MessageRoom with id: {id}</Text>
    </View>
  )
}

export default MessageRoom;
