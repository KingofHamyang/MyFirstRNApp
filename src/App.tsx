/* eslint-disable no-alert */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
	const [selectedImage, setSelectedImage] = React.useState(null);

	const openImagePickerAsync = async () => {
		const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

		if (permissionResult.granted === false) {
			alert('Permission to access camera roll is required!');
			return;
		}

		const pickerResult = await ImagePicker.launchImageLibraryAsync();

		if (pickerResult.cancelled === true) {
			return;
		}

		setSelectedImage({ localUri: pickerResult.uri });
	};

	if (selectedImage !== null) {
		return (
			<View style={styles.container}>
				<Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View>
				<Image source={logo} style={styles.logo} />
				<Text style={styles.instructions}>My First React Native App tutorial</Text>
			</View>
			<TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
				<Text style={styles.buttonText}>Pick a photo</Text>
			</TouchableOpacity>
		</View>
	);
}
