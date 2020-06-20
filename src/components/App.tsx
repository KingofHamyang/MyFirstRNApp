/* eslint-disable no-alert */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('./assets/logo.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	logo: {
		width: 305,
		height: 159,
		marginBottom: 10,
	},
	instructions: {
		color: '#888',
		fontSize: 18,
		marginHorizontal: 15,
	},
	button: {
		backgroundColor: 'blue',
		padding: 20,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 20,
		color: '#fff',
	},
	thumbnail: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
	},
});

export default function App(): JSX.Element {
	return (
		<View style={styles.container}>
			<View>
				<Image source={logo} style={styles.logo} />
				<Text style={styles.instructions}>My First React Native App tutorial</Text>
			</View>
			<TouchableOpacity onPress={() => alert('sdf')} style={styles.button}>
				<Text style={styles.buttonText}>change button color</Text>
			</TouchableOpacity>
		</View>
	);
}
