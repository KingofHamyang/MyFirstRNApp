/* eslint-disable no-alert */
import React from 'react';
import { TextInput } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import styles from './user-input.style';

export default function UserInput(): JSX.Element {
	return <TextInput style={styles.input} />;
}
