/* eslint-disable no-alert */
import React from 'react';
import { Image } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import styles from './background.style';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('../../assets/wallpaper.png');

export default class App extends React.Component<Props, State> {
	public render(): JSX.Element {
		return (
			<Image style={styles.picture} source={logo}>
				{this.props.children}
			</Image>
		);
	}
}
