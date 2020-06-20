/* eslint-disable no-alert */
import React from 'react';
import { Image, ImageBackground } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import styles from './background.style';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('../../assets/wallpaper.png');

interface Props {
	children: React.ReactNode;
}

export default function Background(props: Props): JSX.Element {
	const { children } = props;

	return (
		<ImageBackground style={styles.picture} source={logo}>
			{children}
		</ImageBackground>
	);
}
