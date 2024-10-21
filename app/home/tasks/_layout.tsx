import { Stack } from 'expo-router'

export default function TaskLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" options={{ title: 'All' }} />
			<Stack.Screen name="detail" options={{ title: 'Detail' }} />
		</Stack>
	)
}
