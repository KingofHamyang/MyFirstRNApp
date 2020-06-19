/* eslint-disable import/extensions */
import { registerRootComponent } from 'expo';

// eslint-disable-next-line import/no-unresolved
import App from './src/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
