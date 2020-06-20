/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
import React from 'react';
import Background from './login/background.component';
import UserInput from './login/user-input.component';

export default function App(): JSX.Element {
	return (
		<Background>
			<UserInput />
		</Background>
	);
}
