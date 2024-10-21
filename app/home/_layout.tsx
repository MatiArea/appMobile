import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Tabs } from 'expo-router'

export default function DrawerLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name="HomeTab"
				options={{
					title: 'Tasks',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'home' : 'home-outline'}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="tasks"
				options={{
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'list' : 'list-outline'}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	)
}
