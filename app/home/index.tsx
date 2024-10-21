import {
	Alert,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import React, { useState } from 'react'

import { Task } from '@/types/TaskType'

export default function TaskListScreen() {
	// Estado con las tareas
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: '1',
			title: 'Comprar comida',
			description: 'Comprar verduras y frutas',
			completed: false,
		},
		{
			id: '2',
			title: 'Hacer ejercicio',
			description: '30 minutos de cardio',
			completed: false,
		},
		{
			id: '3',
			title: 'Leer un libro',
			description: 'Leer 20 páginas de un libro',
			completed: true,
		},
	])

	// Función para marcar una tarea como completada
	const toggleTaskCompletion = (taskId: string) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task,
			),
		)
	}

	// Función para eliminar una tarea
	const deleteTask = (taskId: string) => {
		Alert.alert(
			'Eliminar Tarea',
			'¿Estás seguro de que deseas eliminar esta tarea?',
			[
				{ text: 'Cancelar', style: 'cancel' },
				{
					text: 'Eliminar',
					onPress: () =>
						setTasks((prevTasks) =>
							prevTasks.filter((task) => task.id !== taskId),
						),
				},
			],
		)
	}

	// Renderizado de cada item (tarea) en la lista
	const renderItem = ({ item }: { item: Task }) => (
		<View style={styles.taskItem}>
			<View style={styles.taskInfo}>
				<Text style={[styles.taskTitle, item.completed && styles.completed]}>
					{item.title}
				</Text>
				<Text style={styles.taskDescription}>{item.description}</Text>
			</View>
			<View style={styles.taskActions}>
				<Button
					icon={
						<Icon
							name={item.completed ? 'checkmark-done' : 'checkmark'}
							type="ionicon"
							color={item.completed ? 'green' : 'gray'}
						/>
					}
					type="clear"
					onPress={() => toggleTaskCompletion(item.id)}
				/>
				<Button
					icon={<Icon name="trash" type="ionicon" color="red" />}
					type="clear"
					onPress={() => deleteTask(item.id)}
				/>
			</View>
		</View>
	)

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Lista de Tareas</Text>
			<FlatList
				data={tasks}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				ListEmptyComponent={
					<Text style={styles.emptyList}>No hay tareas pendientes</Text>
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f5f5f5',
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 15,
		color: '#333',
	},
	taskItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 15,
		marginVertical: 8,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
	},
	taskInfo: {
		flex: 1,
	},
	taskTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	completed: {
		textDecorationLine: 'line-through',
		color: 'green',
	},
	taskDescription: {
		fontSize: 14,
		color: '#666',
		marginTop: 5,
	},
	taskActions: {
		flexDirection: 'row',
	},
	emptyList: {
		textAlign: 'center',
		marginTop: 20,
		color: '#666',
	},
})
