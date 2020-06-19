import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('./assets/logo.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
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
});

export default function App(): JSX.Element {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.instructions} />
			<Text style={styles.logo}>My First React Native App tutorial</Text>
		</View>
	);
}
