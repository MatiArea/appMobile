import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useState } from 'react'

import { setUser } from '@/store/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from 'expo-router'

type LoginScreenProps = {
	onLogin: (isAuthenticated: boolean) => void
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
	const [email, setEmail] = useState('admin@appmobiles.com')
	const [password, setPassword] = useState('123456')
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()
	const navigation = useNavigation()

	// Función para manejar el login
	const handleLogin = () => {
		if (!email || !password) {
			Alert.alert('Error', 'Por favor, complete todos los campos.')
			return
		}

		if (!validateEmail(email)) {
			Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.')
			return
		}

		if (email !== 'admin@appmobiles.com' || password !== '123456') {
			Alert.alert('Error', 'Correo o contraseña incorrectos.')
			return
		}

		setLoading(true)

		// Fetch a la API de autenticación
		setTimeout(() => {
			// Simulación de login exitoso
			dispatch(
				setUser({
					id: '1',
					name: 'Admin',
					email: 'admin@appmobiles.com',
					address: 'Calle 123',
					phone: '1234567890',
					image: 'https://randomuser.me/api/portraits/men/3.jpg',
				}),
			)
			onLogin(true)
			setLoading(false)
		}, 2000)
	}

	// Validación de formato correcto de correo electrónico
	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Iniciar Sesión</Text>

			<TextInput
				style={styles.input}
				placeholder="Correo electrónico"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
				autoCorrect={false}
			/>

			<TextInput
				style={styles.input}
				placeholder="Contraseña"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>

			<TouchableOpacity
				style={[styles.button, loading && styles.disabledButton]}
				onPress={handleLogin}
				disabled={loading}
			>
				<Text style={styles.buttonText}>
					{loading ? 'Iniciando...' : 'Iniciar Sesión'}
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() =>
					Alert.alert('Olvidé mi contraseña', 'Funcionalidad por implementar')
				}
			>
				<Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#f5f5f5',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
		color: '#333',
	},
	input: {
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 10,
		marginBottom: 15,
		fontSize: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 2,
	},
	button: {
		backgroundColor: '#007bff',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		marginVertical: 10,
	},
	disabledButton: {
		backgroundColor: '#aaa',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
	forgotPassword: {
		textAlign: 'center',
		marginTop: 10,
		color: '#007bff',
		fontSize: 14,
	},
})

export default LoginScreen
