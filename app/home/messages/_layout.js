import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'All Messages',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Message Room',
        }}
      />
    </Stack>
  );
};
