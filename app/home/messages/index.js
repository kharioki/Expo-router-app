import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>

      <Link style={styles.link} href="/home/messages/123">Messages from Bobo</Link>

      <Link style={styles.link} href="/home/messages/456">Messages from Jane</Link>

      <Link style={styles.link} href="/home/messages/789">Messages from Tony</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    color: '#6146c6',
    fontSize: 16,
    fontWeight: 'semibold',
    margin: 10
  }
})

export default Messages
