import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const _layout = () => {
  LogBox.ignoreLogs(["Warning: Failed prop type"])
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='exerciseDetails'
        options={{
          presentation:'modal'
        }}
      />

      <Stack.Screen
        name='Exercises'
        options={{
          presentation: 'fullScreenModal'
        }} />
    </Stack>
  )
}

export default _layout;