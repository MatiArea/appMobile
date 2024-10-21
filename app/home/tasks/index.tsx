import { Pressable, Text, View } from 'react-native'

import { Link } from 'expo-router'

export default function TaskScreen() {
	return (
		<View>
			<Text>This is the Task Screen</Text>
			<Link
				href={{
					pathname: '/home/tasks/detail',
					params: { id: '1' },
				}}
				asChild
			>
				<Pressable
					style={{
						backgroundColor: 'red',
						padding: 10,
						margin: 10,
						borderRadius: 10,
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 20,
							textAlign: 'center',
						}}
					>
						Go to details
					</Text>
				</Pressable>
			</Link>
		</View>
	)
}
