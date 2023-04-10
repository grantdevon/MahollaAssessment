/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainProvider from './MainProvider';

AppRegistry.registerComponent(appName, () => MainProvider);
