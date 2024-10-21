import { Avatar, Button } from 'react-native-elements'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { User } from '@/types/UserType'
import { useSelector } from 'react-redux'

export default function ProfileScreen() {
	const user = useSelector((state: { user: User }) => state.user)

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.profileSection}>
				<Avatar
					rounded
					size="xlarge"
					source={{
						uri: user.image,
					}}
					containerStyle={styles.avatar}
				/>
				<Text style={styles.name}>{user.name}</Text>
				<Text style={styles.email}>{user.email}</Text>
			</View>
			<View style={styles.infoSection}>
				<View style={styles.infoRow}>
					<Icon name="person" size={24} color="#4F8EF7" />
					<Text style={styles.infoText}>ID de Empleado: {user.id}</Text>
				</View>
				<View style={styles.infoRow}>
					<Icon name="call" size={24} color="#4F8EF7" />
					<Text style={styles.infoText}>Teléfono: {user.phone}</Text>
				</View>
				<View style={styles.infoRow}>
					<Icon name="location" size={24} color="#4F8EF7" />
					<Text style={styles.infoText}>Dirección: {user.address}</Text>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 20,
		backgroundColor: '#f4f4f4',
	},
	profileSection: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	avatar: {
		marginBottom: 15,
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#333',
	},
	email: {
		fontSize: 16,
		color: '#666',
	},
	infoSection: {
		marginVertical: 20,
	},
	infoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	infoText: {
		fontSize: 18,
		marginLeft: 10,
		color: '#555',
	},
	editButton: {
		backgroundColor: '#4F8EF7',
		borderRadius: 10,
		paddingVertical: 10,
	},
})
