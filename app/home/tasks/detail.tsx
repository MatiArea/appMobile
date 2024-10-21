import { Text, View } from 'react-native'

import { useGlobalSearchParams } from 'expo-router'

export default function TaskDetailScreen() {
	const { id } = useGlobalSearchParams()
	return (
		<View>
			<Text>This is the Task Detail Screen</Text>
			<Text>Task ID: {id}</Text>
		</View>
	)
}
