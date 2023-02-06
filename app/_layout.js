import { Stack } from "expo-router";

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
      }}
    />
  );
}
