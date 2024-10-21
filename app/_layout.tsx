import 'react-native-reanimated'

import * as SplashScreen from 'expo-splash-screen'

import { useEffect, useState } from 'react'

import { Drawer } from 'expo-router/drawer'
import LoginScreen from './login'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { useFonts } from 'expo-font'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	})
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<Provider store={store}>
			{isAuthenticated ? (
				<Drawer initialRouteName="home">
					<Drawer.Screen name="home" options={{ title: 'Home' }} />
					<Drawer.Screen name="profile" options={{ title: 'Mi Perfil' }} />
					<Drawer.Screen name="suport" options={{ title: 'Soporte' }} />
				</Drawer>
			) : (
				<LoginScreen onLogin={setIsAuthenticated} />
			)}
		</Provider>
	)
}
